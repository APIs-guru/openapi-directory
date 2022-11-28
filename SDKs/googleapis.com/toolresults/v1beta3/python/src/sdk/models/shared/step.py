from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class StepStateEnum(str, Enum):
    UNKNOWN_STATE = "unknownState"
    PENDING = "pending"
    IN_PROGRESS = "inProgress"
    COMPLETE = "complete"


@dataclass_json
@dataclass
class Step:
    r"""Step
    A Step represents a single operation performed as part of Execution. A step can be used to represent the execution of a tool ( for example a test runner execution or an execution of a compiler). Steps can overlap (for instance two steps might have the same start time if some operations are done in parallel). Here is an example, let's consider that we have a continuous build is executing a test runner for each iteration. The workflow would look like: - user creates a Execution with id 1 - user creates an TestExecutionStep with id 100 for Execution 1 - user update TestExecutionStep with id 100 to add a raw xml log + the service parses the xml logs and returns a TestExecutionStep with updated TestResult(s). - user update the status of TestExecutionStep with id 100 to COMPLETE A Step can be updated until its state is set to COMPLETE at which points it becomes immutable. Next tag: 27
    """
    
    completion_time: Optional[Timestamp] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionTime') }})
    creation_time: Optional[Timestamp] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    device_usage_duration: Optional[Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceUsageDuration') }})
    dimension_value: Optional[List[StepDimensionValueEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionValue') }})
    has_images: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasImages') }})
    labels: Optional[List[StepLabelsEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    multi_step: Optional[MultiStep] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multiStep') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    outcome: Optional[Outcome] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outcome') }})
    run_duration: Optional[Duration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runDuration') }})
    state: Optional[StepStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    step_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepId') }})
    test_execution_step: Optional[TestExecutionStep] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testExecutionStep') }})
    tool_execution_step: Optional[ToolExecutionStep] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolExecutionStep') }})
    

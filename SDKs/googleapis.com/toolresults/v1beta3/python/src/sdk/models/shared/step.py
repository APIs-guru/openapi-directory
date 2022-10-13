from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import timestamp
from . import timestamp
from . import duration
from . import stepdimensionvalueentry
from . import steplabelsentry
from . import multistep
from . import outcome
from . import duration
from . import testexecutionstep
from . import toolexecutionstep

class StepStateEnum(str, Enum):
    UNKNOWN_STATE = "unknownState"
    PENDING = "pending"
    IN_PROGRESS = "inProgress"
    COMPLETE = "complete"


@dataclass_json
@dataclass
class Step:
    completion_time: Optional[timestamp.Timestamp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionTime' }})
    creation_time: Optional[timestamp.Timestamp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    device_usage_duration: Optional[duration.Duration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceUsageDuration' }})
    dimension_value: Optional[List[stepdimensionvalueentry.StepDimensionValueEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionValue' }})
    has_images: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hasImages' }})
    labels: Optional[List[steplabelsentry.StepLabelsEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    multi_step: Optional[multistep.MultiStep] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiStep' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    outcome: Optional[outcome.Outcome] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outcome' }})
    run_duration: Optional[duration.Duration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runDuration' }})
    state: Optional[StepStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    step_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stepId' }})
    test_execution_step: Optional[testexecutionstep.TestExecutionStep] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testExecutionStep' }})
    tool_execution_step: Optional[toolexecutionstep.ToolExecutionStep] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toolExecutionStep' }})
    

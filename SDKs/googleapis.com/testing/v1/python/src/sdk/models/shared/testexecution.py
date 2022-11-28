from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TestExecutionStateEnum(str, Enum):
    TEST_STATE_UNSPECIFIED = "TEST_STATE_UNSPECIFIED"
    VALIDATING = "VALIDATING"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    FINISHED = "FINISHED"
    ERROR = "ERROR"
    UNSUPPORTED_ENVIRONMENT = "UNSUPPORTED_ENVIRONMENT"
    INCOMPATIBLE_ENVIRONMENT = "INCOMPATIBLE_ENVIRONMENT"
    INCOMPATIBLE_ARCHITECTURE = "INCOMPATIBLE_ARCHITECTURE"
    CANCELLED = "CANCELLED"
    INVALID = "INVALID"


@dataclass_json
@dataclass
class TestExecution:
    r"""TestExecution
    A single test executed in a single environment.
    """
    
    environment: Optional[Environment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environment') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    matrix_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matrixId') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    shard: Optional[Shard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shard') }})
    state: Optional[TestExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    test_details: Optional[TestDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testDetails') }})
    test_specification: Optional[TestSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testSpecification') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    tool_results_step: Optional[ToolResultsStep] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolResultsStep') }})
    

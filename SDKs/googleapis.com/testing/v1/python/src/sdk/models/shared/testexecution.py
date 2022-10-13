from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import environment
from . import shard
from . import testdetails
from . import testspecification
from . import toolresultsstep

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
    environment: Optional[environment.Environment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    matrix_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matrixId' }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    shard: Optional[shard.Shard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shard' }})
    state: Optional[TestExecutionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    test_details: Optional[testdetails.TestDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testDetails' }})
    test_specification: Optional[testspecification.TestSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testSpecification' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    tool_results_step: Optional[toolresultsstep.ToolResultsStep] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toolResultsStep' }})
    

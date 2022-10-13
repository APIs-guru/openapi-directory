from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CancelTestMatrixResponseTestStateEnum(str, Enum):
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
class CancelTestMatrixResponse:
    test_state: Optional[CancelTestMatrixResponseTestStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testState' }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""CancelTestMatrixResponse
    Response containing the current state of the specified test matrix.
    """
    
    test_state: Optional[CancelTestMatrixResponseTestStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testState') }})
    

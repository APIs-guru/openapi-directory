from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    SUCCEEDED = "SUCCEEDED"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoSuccessPolicy:
    r"""EnterpriseCrmEventbusProtoSuccessPolicy
    Policy that dictates the behavior for the task after it completes successfully.
    """
    
    final_state: Optional[EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalState') }})
    

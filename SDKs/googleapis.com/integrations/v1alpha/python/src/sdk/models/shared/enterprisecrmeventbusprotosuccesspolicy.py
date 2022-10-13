from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    SUCCEEDED = "SUCCEEDED"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoSuccessPolicy:
    final_state: Optional[EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalState' }})
    

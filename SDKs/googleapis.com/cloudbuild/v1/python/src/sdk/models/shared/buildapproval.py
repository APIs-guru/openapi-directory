from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import approvalconfig
from . import approvalresult

class BuildApprovalStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    APPROVED = "APPROVED"
    REJECTED = "REJECTED"
    CANCELLED = "CANCELLED"


@dataclass_json
@dataclass
class BuildApproval:
    config: Optional[approvalconfig.ApprovalConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    result: Optional[approvalresult.ApprovalResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    state: Optional[BuildApprovalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

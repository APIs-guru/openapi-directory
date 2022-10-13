from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ApprovalResultDecisionEnum(str, Enum):
    DECISION_UNSPECIFIED = "DECISION_UNSPECIFIED"
    APPROVED = "APPROVED"
    REJECTED = "REJECTED"


@dataclass_json
@dataclass
class ApprovalResult:
    approval_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalTime' }})
    approver_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approverAccount' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    decision: Optional[ApprovalResultDecisionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'decision' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

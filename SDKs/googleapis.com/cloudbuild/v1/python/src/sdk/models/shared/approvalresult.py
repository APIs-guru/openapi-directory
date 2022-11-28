from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ApprovalResultDecisionEnum(str, Enum):
    DECISION_UNSPECIFIED = "DECISION_UNSPECIFIED"
    APPROVED = "APPROVED"
    REJECTED = "REJECTED"


@dataclass_json
@dataclass
class ApprovalResultInput:
    r"""ApprovalResultInput
    ApprovalResult describes the decision and associated metadata of a manual approval of a build.
    """
    
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    decision: Optional[ApprovalResultDecisionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decision') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ApprovalResult:
    r"""ApprovalResult
    ApprovalResult describes the decision and associated metadata of a manual approval of a build.
    """
    
    approval_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalTime') }})
    approver_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approverAccount') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    decision: Optional[ApprovalResultDecisionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('decision') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ProvisioningIssueReasonEnum(str, Enum):
    REASON_UNSPECIFIED = "REASON_UNSPECIFIED"
    AUTHORIZATION_ISSUE = "AUTHORIZATION_ISSUE"
    RATE_LIMITED = "RATE_LIMITED"


@dataclass_json
@dataclass
class ProvisioningIssue:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    reason: Optional[ProvisioningIssueReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    

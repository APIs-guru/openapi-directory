from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import policytopicentry

class PolicyComplianceStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    PENDING_REVIEW = "PENDING_REVIEW"
    DISAPPROVED = "DISAPPROVED"
    APPROVED = "APPROVED"
    CERTIFICATE_REQUIRED = "CERTIFICATE_REQUIRED"


@dataclass_json
@dataclass
class PolicyCompliance:
    status: Optional[PolicyComplianceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    topics: Optional[List[policytopicentry.PolicyTopicEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topics' }})
    

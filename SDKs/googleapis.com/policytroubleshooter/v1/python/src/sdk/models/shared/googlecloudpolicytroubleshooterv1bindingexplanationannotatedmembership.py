from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum(str, Enum):
    MEMBERSHIP_UNSPECIFIED = "MEMBERSHIP_UNSPECIFIED"
    MEMBERSHIP_INCLUDED = "MEMBERSHIP_INCLUDED"
    MEMBERSHIP_NOT_INCLUDED = "MEMBERSHIP_NOT_INCLUDED"
    MEMBERSHIP_UNKNOWN_INFO_DENIED = "MEMBERSHIP_UNKNOWN_INFO_DENIED"
    MEMBERSHIP_UNKNOWN_UNSUPPORTED = "MEMBERSHIP_UNKNOWN_UNSUPPORTED"

class GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum(str, Enum):
    HEURISTIC_RELEVANCE_UNSPECIFIED = "HEURISTIC_RELEVANCE_UNSPECIFIED"
    NORMAL = "NORMAL"
    HIGH = "HIGH"


@dataclass_json
@dataclass
class GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembership:
    membership: Optional[GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipMembershipEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membership' }})
    relevance: Optional[GoogleCloudPolicytroubleshooterV1BindingExplanationAnnotatedMembershipRelevanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relevance' }})
    

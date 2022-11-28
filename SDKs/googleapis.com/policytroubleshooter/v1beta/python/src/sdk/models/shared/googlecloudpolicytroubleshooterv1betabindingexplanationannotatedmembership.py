from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum(str, Enum):
    MEMBERSHIP_UNSPECIFIED = "MEMBERSHIP_UNSPECIFIED"
    MEMBERSHIP_INCLUDED = "MEMBERSHIP_INCLUDED"
    MEMBERSHIP_NOT_INCLUDED = "MEMBERSHIP_NOT_INCLUDED"
    MEMBERSHIP_UNKNOWN_INFO_DENIED = "MEMBERSHIP_UNKNOWN_INFO_DENIED"
    MEMBERSHIP_UNKNOWN_UNSUPPORTED = "MEMBERSHIP_UNKNOWN_UNSUPPORTED"

class GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipRelevanceEnum(str, Enum):
    HEURISTIC_RELEVANCE_UNSPECIFIED = "HEURISTIC_RELEVANCE_UNSPECIFIED"
    NORMAL = "NORMAL"
    HIGH = "HIGH"


@dataclass_json
@dataclass
class GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership:
    r"""GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembership
    Details about whether the binding includes the member.
    """
    
    membership: Optional[GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipMembershipEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membership') }})
    relevance: Optional[GoogleCloudPolicytroubleshooterV1betaBindingExplanationAnnotatedMembershipRelevanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relevance') }})
    

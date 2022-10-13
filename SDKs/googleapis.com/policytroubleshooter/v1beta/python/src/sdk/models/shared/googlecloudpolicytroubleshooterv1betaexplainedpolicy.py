from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpolicytroubleshooterv1betabindingexplanation
from . import googleiamv1policy

class GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"

class GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnum(str, Enum):
    HEURISTIC_RELEVANCE_UNSPECIFIED = "HEURISTIC_RELEVANCE_UNSPECIFIED"
    NORMAL = "NORMAL"
    HIGH = "HIGH"


@dataclass_json
@dataclass
class GoogleCloudPolicytroubleshooterV1betaExplainedPolicy:
    access: Optional[GoogleCloudPolicytroubleshooterV1betaExplainedPolicyAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    binding_explanations: Optional[List[googlecloudpolicytroubleshooterv1betabindingexplanation.GoogleCloudPolicytroubleshooterV1betaBindingExplanation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bindingExplanations' }})
    full_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullResourceName' }})
    policy: Optional[googleiamv1policy.GoogleIamV1Policy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    relevance: Optional[GoogleCloudPolicytroubleshooterV1betaExplainedPolicyRelevanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relevance' }})
    

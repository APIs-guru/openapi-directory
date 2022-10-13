from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpolicysimulatorv1beta1bindingexplanation
from . import googleiamv1policy

class GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"

class GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnum(str, Enum):
    HEURISTIC_RELEVANCE_UNSPECIFIED = "HEURISTIC_RELEVANCE_UNSPECIFIED"
    NORMAL = "NORMAL"
    HIGH = "HIGH"


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1beta1ExplainedPolicy:
    access: Optional[GoogleCloudPolicysimulatorV1beta1ExplainedPolicyAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    binding_explanations: Optional[List[googlecloudpolicysimulatorv1beta1bindingexplanation.GoogleCloudPolicysimulatorV1beta1BindingExplanation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bindingExplanations' }})
    full_resource_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullResourceName' }})
    policy: Optional[googleiamv1policy.GoogleIamV1Policy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    relevance: Optional[GoogleCloudPolicysimulatorV1beta1ExplainedPolicyRelevanceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relevance' }})
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpolicytroubleshooterv1betaexplainedpolicy

class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"


@dataclass_json
@dataclass
class GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponse:
    access: Optional[GoogleCloudPolicytroubleshooterV1betaTroubleshootIamPolicyResponseAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    explained_policies: Optional[List[googlecloudpolicytroubleshooterv1betaexplainedpolicy.GoogleCloudPolicytroubleshooterV1betaExplainedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explainedPolicies' }})
    

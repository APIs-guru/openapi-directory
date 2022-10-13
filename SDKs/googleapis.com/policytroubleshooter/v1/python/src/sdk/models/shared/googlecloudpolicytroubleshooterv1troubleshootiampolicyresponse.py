from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlerpcstatus
from . import googlecloudpolicytroubleshooterv1explainedpolicy

class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"


@dataclass_json
@dataclass
class GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse:
    access: Optional[GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponseAccessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access' }})
    errors: Optional[List[googlerpcstatus.GoogleRPCStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    explained_policies: Optional[List[googlecloudpolicytroubleshooterv1explainedpolicy.GoogleCloudPolicytroubleshooterV1ExplainedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explainedPolicies' }})
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlerpcstatus
from . import googlecloudpolicysimulatorv1beta1explainedpolicy

class GoogleCloudPolicysimulatorV1beta1ExplainedAccessAccessStateEnum(str, Enum):
    ACCESS_STATE_UNSPECIFIED = "ACCESS_STATE_UNSPECIFIED"
    GRANTED = "GRANTED"
    NOT_GRANTED = "NOT_GRANTED"
    UNKNOWN_CONDITIONAL = "UNKNOWN_CONDITIONAL"
    UNKNOWN_INFO_DENIED = "UNKNOWN_INFO_DENIED"


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1beta1ExplainedAccess:
    access_state: Optional[GoogleCloudPolicysimulatorV1beta1ExplainedAccessAccessStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessState' }})
    errors: Optional[List[googlerpcstatus.GoogleRPCStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    policies: Optional[List[googlecloudpolicysimulatorv1beta1explainedpolicy.GoogleCloudPolicysimulatorV1beta1ExplainedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    

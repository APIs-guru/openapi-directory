from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum(str, Enum):
    FINAL_STATE_UNSPECIFIED = "FINAL_STATE_UNSPECIFIED"
    SUCCEEDED = "SUCCEEDED"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class GoogleCloudIntegrationsV1alphaSuccessPolicy:
    final_state: Optional[GoogleCloudIntegrationsV1alphaSuccessPolicyFinalStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'finalState' }})
    

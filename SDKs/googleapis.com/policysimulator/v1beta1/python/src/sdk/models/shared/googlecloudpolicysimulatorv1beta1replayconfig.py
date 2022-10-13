from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleiamv1policy

class GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum(str, Enum):
    LOG_SOURCE_UNSPECIFIED = "LOG_SOURCE_UNSPECIFIED"
    RECENT_ACCESSES = "RECENT_ACCESSES"


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1beta1ReplayConfig:
    log_source: Optional[GoogleCloudPolicysimulatorV1beta1ReplayConfigLogSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logSource' }})
    policy_overlay: Optional[dict[str, googleiamv1policy.GoogleIamV1Policy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyOverlay' }})
    

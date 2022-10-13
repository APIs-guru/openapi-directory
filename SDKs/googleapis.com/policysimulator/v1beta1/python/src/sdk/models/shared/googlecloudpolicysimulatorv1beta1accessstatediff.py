from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpolicysimulatorv1beta1explainedaccess
from . import googlecloudpolicysimulatorv1beta1explainedaccess

class GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum(str, Enum):
    ACCESS_CHANGE_TYPE_UNSPECIFIED = "ACCESS_CHANGE_TYPE_UNSPECIFIED"
    NO_CHANGE = "NO_CHANGE"
    UNKNOWN_CHANGE = "UNKNOWN_CHANGE"
    ACCESS_REVOKED = "ACCESS_REVOKED"
    ACCESS_GAINED = "ACCESS_GAINED"
    ACCESS_MAYBE_REVOKED = "ACCESS_MAYBE_REVOKED"
    ACCESS_MAYBE_GAINED = "ACCESS_MAYBE_GAINED"


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1beta1AccessStateDiff:
    access_change: Optional[GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessChange' }})
    baseline: Optional[googlecloudpolicysimulatorv1beta1explainedaccess.GoogleCloudPolicysimulatorV1beta1ExplainedAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseline' }})
    simulated: Optional[googlecloudpolicysimulatorv1beta1explainedaccess.GoogleCloudPolicysimulatorV1beta1ExplainedAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simulated' }})
    

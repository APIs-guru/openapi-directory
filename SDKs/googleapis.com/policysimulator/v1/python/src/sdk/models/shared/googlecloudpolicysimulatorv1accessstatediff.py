from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudpolicysimulatorv1explainedaccess
from . import googlecloudpolicysimulatorv1explainedaccess

class GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum(str, Enum):
    ACCESS_CHANGE_TYPE_UNSPECIFIED = "ACCESS_CHANGE_TYPE_UNSPECIFIED"
    NO_CHANGE = "NO_CHANGE"
    UNKNOWN_CHANGE = "UNKNOWN_CHANGE"
    ACCESS_REVOKED = "ACCESS_REVOKED"
    ACCESS_GAINED = "ACCESS_GAINED"
    ACCESS_MAYBE_REVOKED = "ACCESS_MAYBE_REVOKED"
    ACCESS_MAYBE_GAINED = "ACCESS_MAYBE_GAINED"


@dataclass_json
@dataclass
class GoogleCloudPolicysimulatorV1AccessStateDiff:
    access_change: Optional[GoogleCloudPolicysimulatorV1AccessStateDiffAccessChangeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessChange' }})
    baseline: Optional[googlecloudpolicysimulatorv1explainedaccess.GoogleCloudPolicysimulatorV1ExplainedAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseline' }})
    simulated: Optional[googlecloudpolicysimulatorv1explainedaccess.GoogleCloudPolicysimulatorV1ExplainedAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simulated' }})
    

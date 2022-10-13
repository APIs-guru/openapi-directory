from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googledevtoolsremotebuildexecutionadminv1alphafeaturepolicy

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    RUNNING = "RUNNING"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance:
    feature_policy: Optional[googledevtoolsremotebuildexecutionadminv1alphafeaturepolicy.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featurePolicy' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    logging_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingEnabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstanceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

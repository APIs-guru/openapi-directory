from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1environmentendpoints
from . import googleclouddataplexv1environmentinfrastructurespec
from . import googleclouddataplexv1environmentsessionspec
from . import googleclouddataplexv1environmentsessionstatus

class GoogleCloudDataplexV1EnvironmentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTION_REQUIRED = "ACTION_REQUIRED"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1Environment:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    endpoints: Optional[googleclouddataplexv1environmentendpoints.GoogleCloudDataplexV1EnvironmentEndpoints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoints' }})
    infrastructure_spec: Optional[googleclouddataplexv1environmentinfrastructurespec.GoogleCloudDataplexV1EnvironmentInfrastructureSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'infrastructureSpec' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    session_spec: Optional[googleclouddataplexv1environmentsessionspec.GoogleCloudDataplexV1EnvironmentSessionSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionSpec' }})
    session_status: Optional[googleclouddataplexv1environmentsessionstatus.GoogleCloudDataplexV1EnvironmentSessionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionStatus' }})
    state: Optional[GoogleCloudDataplexV1EnvironmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1assetdiscoveryspec
from . import googleclouddataplexv1assetdiscoverystatus
from . import googleclouddataplexv1assetresourcespec
from . import googleclouddataplexv1assetresourcestatus
from . import googleclouddataplexv1assetsecuritystatus

class GoogleCloudDataplexV1AssetStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTION_REQUIRED = "ACTION_REQUIRED"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1Asset:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    discovery_spec: Optional[googleclouddataplexv1assetdiscoveryspec.GoogleCloudDataplexV1AssetDiscoverySpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discoverySpec' }})
    discovery_status: Optional[googleclouddataplexv1assetdiscoverystatus.GoogleCloudDataplexV1AssetDiscoveryStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discoveryStatus' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_spec: Optional[googleclouddataplexv1assetresourcespec.GoogleCloudDataplexV1AssetResourceSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceSpec' }})
    resource_status: Optional[googleclouddataplexv1assetresourcestatus.GoogleCloudDataplexV1AssetResourceStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceStatus' }})
    security_status: Optional[googleclouddataplexv1assetsecuritystatus.GoogleCloudDataplexV1AssetSecurityStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityStatus' }})
    state: Optional[GoogleCloudDataplexV1AssetStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    

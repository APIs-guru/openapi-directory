from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1assetstatus
from . import googleclouddataplexv1zonediscoveryspec
from . import googleclouddataplexv1zoneresourcespec

class GoogleCloudDataplexV1ZoneStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTION_REQUIRED = "ACTION_REQUIRED"

class GoogleCloudDataplexV1ZoneTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    RAW = "RAW"
    CURATED = "CURATED"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1Zone:
    asset_status: Optional[googleclouddataplexv1assetstatus.GoogleCloudDataplexV1AssetStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetStatus' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    discovery_spec: Optional[googleclouddataplexv1zonediscoveryspec.GoogleCloudDataplexV1ZoneDiscoverySpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discoverySpec' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_spec: Optional[googleclouddataplexv1zoneresourcespec.GoogleCloudDataplexV1ZoneResourceSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceSpec' }})
    state: Optional[GoogleCloudDataplexV1ZoneStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: Optional[GoogleCloudDataplexV1ZoneTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    

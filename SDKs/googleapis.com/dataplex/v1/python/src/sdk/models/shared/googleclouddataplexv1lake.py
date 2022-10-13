from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddataplexv1assetstatus
from . import googleclouddataplexv1lakemetastore
from . import googleclouddataplexv1lakemetastorestatus

class GoogleCloudDataplexV1LakeStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTION_REQUIRED = "ACTION_REQUIRED"


@dataclass_json
@dataclass
class GoogleCloudDataplexV1Lake:
    asset_status: Optional[googleclouddataplexv1assetstatus.GoogleCloudDataplexV1AssetStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetStatus' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    metastore: Optional[googleclouddataplexv1lakemetastore.GoogleCloudDataplexV1LakeMetastore] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metastore' }})
    metastore_status: Optional[googleclouddataplexv1lakemetastorestatus.GoogleCloudDataplexV1LakeMetastoreStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metastoreStatus' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccount' }})
    state: Optional[GoogleCloudDataplexV1LakeStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    

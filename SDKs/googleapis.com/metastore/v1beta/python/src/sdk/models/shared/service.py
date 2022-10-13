from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import encryptionconfig
from . import hivemetastoreconfig
from . import maintenancewindow
from . import metadataintegration
from . import metadatamanagementactivity
from . import networkconfig

class ServiceDatabaseTypeEnum(str, Enum):
    DATABASE_TYPE_UNSPECIFIED = "DATABASE_TYPE_UNSPECIFIED"
    MYSQL = "MYSQL"
    SPANNER = "SPANNER"

class ServiceReleaseChannelEnum(str, Enum):
    RELEASE_CHANNEL_UNSPECIFIED = "RELEASE_CHANNEL_UNSPECIFIED"
    CANARY = "CANARY"
    STABLE = "STABLE"

class ServiceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    SUSPENDING = "SUSPENDING"
    SUSPENDED = "SUSPENDED"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    ERROR = "ERROR"

class ServiceTierEnum(str, Enum):
    TIER_UNSPECIFIED = "TIER_UNSPECIFIED"
    DEVELOPER = "DEVELOPER"
    ENTERPRISE = "ENTERPRISE"


@dataclass_json
@dataclass
class Service:
    artifact_gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactGcsUri' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    database_type: Optional[ServiceDatabaseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseType' }})
    encryption_config: Optional[encryptionconfig.EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfig' }})
    endpoint_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpointUri' }})
    hive_metastore_config: Optional[hivemetastoreconfig.HiveMetastoreConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiveMetastoreConfig' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    maintenance_window: Optional[maintenancewindow.MaintenanceWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenanceWindow' }})
    metadata_integration: Optional[metadataintegration.MetadataIntegration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataIntegration' }})
    metadata_management_activity: Optional[metadatamanagementactivity.MetadataManagementActivity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataManagementActivity' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    network_config: Optional[networkconfig.NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfig' }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port' }})
    release_channel: Optional[ServiceReleaseChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseChannel' }})
    state: Optional[ServiceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMessage' }})
    tier: Optional[ServiceTierEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tier' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    

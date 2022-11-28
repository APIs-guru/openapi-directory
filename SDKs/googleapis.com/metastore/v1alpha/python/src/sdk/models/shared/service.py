from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class ServiceInput:
    r"""ServiceInput
    A managed metastore service that serves metadata queries.
    """
    
    database_type: Optional[ServiceDatabaseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseType') }})
    encryption_config: Optional[EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    hive_metastore_config: Optional[HiveMetastoreConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiveMetastoreConfig') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    maintenance_window: Optional[MaintenanceWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceWindow') }})
    metadata_integration: Optional[MetadataIntegration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataIntegration') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_config: Optional[NetworkConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    release_channel: Optional[ServiceReleaseChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseChannel') }})
    telemetry_config: Optional[TelemetryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telemetryConfig') }})
    tier: Optional[ServiceTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    

@dataclass_json
@dataclass
class Service:
    r"""Service
    A managed metastore service that serves metadata queries.
    """
    
    artifact_gcs_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifactGcsUri') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    database_type: Optional[ServiceDatabaseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseType') }})
    encryption_config: Optional[EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    endpoint_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpointUri') }})
    hive_metastore_config: Optional[HiveMetastoreConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiveMetastoreConfig') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    maintenance_window: Optional[MaintenanceWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceWindow') }})
    metadata_integration: Optional[MetadataIntegration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataIntegration') }})
    metadata_management_activity: Optional[MetadataManagementActivity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataManagementActivity') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_config: Optional[NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    release_channel: Optional[ServiceReleaseChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseChannel') }})
    state: Optional[ServiceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMessage') }})
    telemetry_config: Optional[TelemetryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telemetryConfig') }})
    tier: Optional[ServiceTierEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tier') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

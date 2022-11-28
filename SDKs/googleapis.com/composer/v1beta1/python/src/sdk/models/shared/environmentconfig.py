from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class EnvironmentConfigEnvironmentSizeEnum(str, Enum):
    ENVIRONMENT_SIZE_UNSPECIFIED = "ENVIRONMENT_SIZE_UNSPECIFIED"
    ENVIRONMENT_SIZE_SMALL = "ENVIRONMENT_SIZE_SMALL"
    ENVIRONMENT_SIZE_MEDIUM = "ENVIRONMENT_SIZE_MEDIUM"
    ENVIRONMENT_SIZE_LARGE = "ENVIRONMENT_SIZE_LARGE"


@dataclass_json
@dataclass
class EnvironmentConfig:
    r"""EnvironmentConfig
    Configuration information for an environment.
    """
    
    airflow_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('airflowUri') }})
    dag_gcs_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dagGcsPrefix') }})
    database_config: Optional[DatabaseConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseConfig') }})
    encryption_config: Optional[EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    environment_size: Optional[EnvironmentConfigEnvironmentSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentSize') }})
    gke_cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gkeCluster') }})
    maintenance_window: Optional[MaintenanceWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceWindow') }})
    master_authorized_networks_config: Optional[MasterAuthorizedNetworksConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterAuthorizedNetworksConfig') }})
    node_config: Optional[NodeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeConfig') }})
    node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCount') }})
    private_environment_config: Optional[PrivateEnvironmentConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateEnvironmentConfig') }})
    recovery_config: Optional[RecoveryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recoveryConfig') }})
    software_config: Optional[SoftwareConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareConfig') }})
    web_server_config: Optional[WebServerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webServerConfig') }})
    web_server_network_access_control: Optional[WebServerNetworkAccessControl] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webServerNetworkAccessControl') }})
    workloads_config: Optional[WorkloadsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadsConfig') }})
    

@dataclass_json
@dataclass
class EnvironmentConfigInput:
    r"""EnvironmentConfigInput
    Configuration information for an environment.
    """
    
    database_config: Optional[DatabaseConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('databaseConfig') }})
    encryption_config: Optional[EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    environment_size: Optional[EnvironmentConfigEnvironmentSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('environmentSize') }})
    maintenance_window: Optional[MaintenanceWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maintenanceWindow') }})
    master_authorized_networks_config: Optional[MasterAuthorizedNetworksConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterAuthorizedNetworksConfig') }})
    node_config: Optional[NodeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeConfig') }})
    node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeCount') }})
    private_environment_config: Optional[PrivateEnvironmentConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateEnvironmentConfig') }})
    recovery_config: Optional[RecoveryConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recoveryConfig') }})
    software_config: Optional[SoftwareConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareConfig') }})
    web_server_config: Optional[WebServerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webServerConfig') }})
    web_server_network_access_control: Optional[WebServerNetworkAccessControl] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webServerNetworkAccessControl') }})
    workloads_config: Optional[WorkloadsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadsConfig') }})
    

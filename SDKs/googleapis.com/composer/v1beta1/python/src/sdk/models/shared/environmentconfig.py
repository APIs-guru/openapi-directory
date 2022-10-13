from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import databaseconfig
from . import encryptionconfig
from . import maintenancewindow
from . import masterauthorizednetworksconfig
from . import nodeconfig
from . import privateenvironmentconfig
from . import softwareconfig
from . import webserverconfig
from . import webservernetworkaccesscontrol
from . import workloadsconfig

class EnvironmentConfigEnvironmentSizeEnum(str, Enum):
    ENVIRONMENT_SIZE_UNSPECIFIED = "ENVIRONMENT_SIZE_UNSPECIFIED"
    ENVIRONMENT_SIZE_SMALL = "ENVIRONMENT_SIZE_SMALL"
    ENVIRONMENT_SIZE_MEDIUM = "ENVIRONMENT_SIZE_MEDIUM"
    ENVIRONMENT_SIZE_LARGE = "ENVIRONMENT_SIZE_LARGE"


@dataclass_json
@dataclass
class EnvironmentConfig:
    airflow_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'airflowUri' }})
    dag_gcs_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dagGcsPrefix' }})
    database_config: Optional[databaseconfig.DatabaseConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'databaseConfig' }})
    encryption_config: Optional[encryptionconfig.EncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfig' }})
    environment_size: Optional[EnvironmentConfigEnvironmentSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentSize' }})
    gke_cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gkeCluster' }})
    maintenance_window: Optional[maintenancewindow.MaintenanceWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenanceWindow' }})
    master_authorized_networks_config: Optional[masterauthorizednetworksconfig.MasterAuthorizedNetworksConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterAuthorizedNetworksConfig' }})
    node_config: Optional[nodeconfig.NodeConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeConfig' }})
    node_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeCount' }})
    private_environment_config: Optional[privateenvironmentconfig.PrivateEnvironmentConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateEnvironmentConfig' }})
    software_config: Optional[softwareconfig.SoftwareConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'softwareConfig' }})
    web_server_config: Optional[webserverconfig.WebServerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webServerConfig' }})
    web_server_network_access_control: Optional[webservernetworkaccesscontrol.WebServerNetworkAccessControl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webServerNetworkAccessControl' }})
    workloads_config: Optional[workloadsconfig.WorkloadsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workloadsConfig' }})
    

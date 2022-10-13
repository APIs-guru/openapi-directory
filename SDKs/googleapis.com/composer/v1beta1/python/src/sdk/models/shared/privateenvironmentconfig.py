from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import networkingconfig
from . import privateclusterconfig


@dataclass_json
@dataclass
class PrivateEnvironmentConfig:
    cloud_composer_connection_subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudComposerConnectionSubnetwork' }})
    cloud_composer_network_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudComposerNetworkIpv4CidrBlock' }})
    cloud_composer_network_ipv4_reserved_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudComposerNetworkIpv4ReservedRange' }})
    cloud_sql_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudSqlIpv4CidrBlock' }})
    enable_private_environment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablePrivateEnvironment' }})
    enable_privately_used_public_ips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablePrivatelyUsedPublicIps' }})
    networking_config: Optional[networkingconfig.NetworkingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkingConfig' }})
    private_cluster_config: Optional[privateclusterconfig.PrivateClusterConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateClusterConfig' }})
    web_server_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webServerIpv4CidrBlock' }})
    web_server_ipv4_reserved_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webServerIpv4ReservedRange' }})
    

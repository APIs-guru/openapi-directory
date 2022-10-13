from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import privateclustermasterglobalaccessconfig


@dataclass_json
@dataclass
class PrivateClusterConfig:
    enable_private_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablePrivateEndpoint' }})
    enable_private_nodes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablePrivateNodes' }})
    master_global_access_config: Optional[privateclustermasterglobalaccessconfig.PrivateClusterMasterGlobalAccessConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterGlobalAccessConfig' }})
    master_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterIpv4CidrBlock' }})
    peering_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peeringName' }})
    private_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateEndpoint' }})
    public_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicEndpoint' }})
    

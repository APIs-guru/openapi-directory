from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PrivateClusterConfig:
    r"""PrivateClusterConfig
    Configuration options for private clusters.
    """
    
    enable_private_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePrivateEndpoint') }})
    enable_private_nodes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePrivateNodes') }})
    master_global_access_config: Optional[PrivateClusterMasterGlobalAccessConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterGlobalAccessConfig') }})
    master_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('masterIpv4CidrBlock') }})
    peering_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peeringName') }})
    private_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateEndpoint') }})
    private_endpoint_subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privateEndpointSubnetwork') }})
    public_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicEndpoint') }})
    

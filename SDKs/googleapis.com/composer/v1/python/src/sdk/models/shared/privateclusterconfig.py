from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PrivateClusterConfig:
    enable_private_endpoint: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablePrivateEndpoint' }})
    master_ipv4_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterIpv4CidrBlock' }})
    master_ipv4_reserved_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterIpv4ReservedRange' }})
    

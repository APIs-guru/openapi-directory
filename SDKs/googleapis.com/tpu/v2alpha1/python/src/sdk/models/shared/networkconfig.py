from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NetworkConfig:
    can_ip_forward: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canIpForward' }})
    enable_external_ips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableExternalIps' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    subnetwork: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetwork' }})
    

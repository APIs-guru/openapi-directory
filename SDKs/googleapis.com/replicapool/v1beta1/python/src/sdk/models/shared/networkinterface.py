from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accessconfig


@dataclass_json
@dataclass
class NetworkInterface:
    access_configs: Optional[List[accessconfig.AccessConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessConfigs' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    network_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkIp' }})
    

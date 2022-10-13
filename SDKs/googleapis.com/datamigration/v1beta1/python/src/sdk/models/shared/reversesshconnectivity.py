from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReverseSSHConnectivity:
    vm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vm' }})
    vm_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmIp' }})
    vm_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmPort' }})
    vpc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vpc' }})
    

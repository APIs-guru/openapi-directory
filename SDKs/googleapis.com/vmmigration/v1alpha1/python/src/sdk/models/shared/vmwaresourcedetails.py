from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VmwareSourceDetails:
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    thumbprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbprint' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    vcenter_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vcenterIp' }})
    

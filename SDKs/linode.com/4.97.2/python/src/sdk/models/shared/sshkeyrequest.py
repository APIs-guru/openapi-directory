from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SSHKeyRequest:
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    ssh_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_key' }})
    

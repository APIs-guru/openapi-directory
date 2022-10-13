from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class User:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    restricted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restricted' }})
    ssh_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssh_keys' }})
    tfa_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tfa_enabled' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import inmemoryuser


@dataclass_json
@dataclass
class InMemoryAuthModuleConfig:
    desc: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desc' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    session_max_age: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionMaxAge' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    users: List[inmemoryuser.InMemoryUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    

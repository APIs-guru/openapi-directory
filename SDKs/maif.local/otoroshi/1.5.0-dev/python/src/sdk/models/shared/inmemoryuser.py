from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InMemoryUser:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    metadata: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    password: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    

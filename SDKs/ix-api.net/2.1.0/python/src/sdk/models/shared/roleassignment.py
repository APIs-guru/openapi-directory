from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RoleAssignment:
    contact: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    

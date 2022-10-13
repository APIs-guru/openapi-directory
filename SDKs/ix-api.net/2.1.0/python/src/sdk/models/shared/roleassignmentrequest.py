from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RoleAssignmentRequest:
    contact: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    

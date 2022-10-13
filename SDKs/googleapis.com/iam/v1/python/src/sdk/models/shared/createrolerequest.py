from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import role


@dataclass_json
@dataclass
class CreateRoleRequest:
    role: Optional[role.Role] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleId' }})
    

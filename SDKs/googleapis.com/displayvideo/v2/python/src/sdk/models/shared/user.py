from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assigneduserrole


@dataclass_json
@dataclass
class User:
    assigned_user_roles: Optional[List[assigneduserrole.AssignedUserRole]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignedUserRoles' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

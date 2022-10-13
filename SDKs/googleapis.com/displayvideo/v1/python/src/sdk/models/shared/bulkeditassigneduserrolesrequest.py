from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assigneduserrole


@dataclass_json
@dataclass
class BulkEditAssignedUserRolesRequest:
    created_assigned_user_roles: Optional[List[assigneduserrole.AssignedUserRole]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAssignedUserRoles' }})
    deleted_assigned_user_roles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedAssignedUserRoles' }})
    

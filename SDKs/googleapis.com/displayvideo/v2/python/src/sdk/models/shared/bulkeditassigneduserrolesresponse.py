from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assigneduserrole


@dataclass_json
@dataclass
class BulkEditAssignedUserRolesResponse:
    created_assigned_user_roles: Optional[List[assigneduserrole.AssignedUserRole]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAssignedUserRoles' }})
    

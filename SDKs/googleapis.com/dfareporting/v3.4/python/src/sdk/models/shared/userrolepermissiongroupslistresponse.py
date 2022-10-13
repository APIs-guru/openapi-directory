from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userrolepermissiongroup


@dataclass_json
@dataclass
class UserRolePermissionGroupsListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    user_role_permission_groups: Optional[List[userrolepermissiongroup.UserRolePermissionGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRolePermissionGroups' }})
    

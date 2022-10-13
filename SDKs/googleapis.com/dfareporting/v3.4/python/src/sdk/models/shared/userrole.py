from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userrolepermission


@dataclass_json
@dataclass
class UserRole:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    default_user_role: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultUserRole' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_user_role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentUserRoleId' }})
    permissions: Optional[List[userrolepermission.UserRolePermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    

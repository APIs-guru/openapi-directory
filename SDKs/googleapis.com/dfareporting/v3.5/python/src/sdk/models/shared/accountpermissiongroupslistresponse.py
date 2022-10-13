from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountpermissiongroup


@dataclass_json
@dataclass
class AccountPermissionGroupsListResponse:
    account_permission_groups: Optional[List[accountpermissiongroup.AccountPermissionGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountPermissionGroups' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    

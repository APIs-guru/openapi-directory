from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountpermission


@dataclass_json
@dataclass
class AccountPermissionsListResponse:
    account_permissions: Optional[List[accountpermission.AccountPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountPermissions' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    

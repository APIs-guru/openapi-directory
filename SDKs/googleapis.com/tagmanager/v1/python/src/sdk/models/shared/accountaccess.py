from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AccountAccessPermissionEnum(str, Enum):
    READ = "read"
    EDIT = "edit"
    PUBLISH = "publish"
    DELETE = "delete"
    MANAGE = "manage"
    EDIT_WORKSPACE = "editWorkspace"


@dataclass_json
@dataclass
class AccountAccess:
    permission: Optional[List[AccountAccessPermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    

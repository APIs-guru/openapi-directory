from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AccountAccessPermissionEnum(str, Enum):
    ACCOUNT_PERMISSION_UNSPECIFIED = "accountPermissionUnspecified"
    NO_ACCESS = "noAccess"
    USER = "user"
    ADMIN = "admin"


@dataclass_json
@dataclass
class AccountAccess:
    permission: Optional[AccountAccessPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    

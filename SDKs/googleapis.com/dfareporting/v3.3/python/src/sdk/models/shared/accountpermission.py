from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class AccountPermissionAccountProfilesEnum(str, Enum):
    ACCOUNT_PROFILE_BASIC = "ACCOUNT_PROFILE_BASIC"
    ACCOUNT_PROFILE_STANDARD = "ACCOUNT_PROFILE_STANDARD"

class AccountPermissionLevelEnum(str, Enum):
    USER = "USER"
    ADMINISTRATOR = "ADMINISTRATOR"


@dataclass_json
@dataclass
class AccountPermission:
    account_profiles: Optional[List[AccountPermissionAccountProfilesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountProfiles' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    level: Optional[AccountPermissionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    permission_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionGroupId' }})
    

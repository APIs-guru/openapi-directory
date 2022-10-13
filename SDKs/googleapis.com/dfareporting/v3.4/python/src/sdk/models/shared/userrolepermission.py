from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UserRolePermissionAvailabilityEnum(str, Enum):
    NOT_AVAILABLE_BY_DEFAULT = "NOT_AVAILABLE_BY_DEFAULT"
    ACCOUNT_BY_DEFAULT = "ACCOUNT_BY_DEFAULT"
    SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT = "SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT"
    ACCOUNT_ALWAYS = "ACCOUNT_ALWAYS"
    SUBACCOUNT_AND_ACCOUNT_ALWAYS = "SUBACCOUNT_AND_ACCOUNT_ALWAYS"
    USER_PROFILE_ONLY = "USER_PROFILE_ONLY"


@dataclass_json
@dataclass
class UserRolePermission:
    availability: Optional[UserRolePermissionAvailabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    permission_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionGroupId' }})
    

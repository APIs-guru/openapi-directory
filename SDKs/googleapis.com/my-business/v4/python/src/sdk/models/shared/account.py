from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AccountPermissionLevelEnum(str, Enum):
    PERMISSION_LEVEL_UNSPECIFIED = "PERMISSION_LEVEL_UNSPECIFIED"
    OWNER_LEVEL = "OWNER_LEVEL"
    MEMBER_LEVEL = "MEMBER_LEVEL"

class AccountRoleEnum(str, Enum):
    ACCOUNT_ROLE_UNSPECIFIED = "ACCOUNT_ROLE_UNSPECIFIED"
    OWNER = "OWNER"
    CO_OWNER = "CO_OWNER"
    MANAGER = "MANAGER"
    COMMUNITY_MANAGER = "COMMUNITY_MANAGER"

class AccountTypeEnum(str, Enum):
    ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED"
    PERSONAL = "PERSONAL"
    LOCATION_GROUP = "LOCATION_GROUP"
    USER_GROUP = "USER_GROUP"
    ORGANIZATION = "ORGANIZATION"


@dataclass_json
@dataclass
class Account:
    r"""Account
    An account is a container for your business's locations. If you are the only user who manages locations for your business, you can use your personal Google Account. To share management of locations with multiple users, [create a business account] (https://support.google.com/business/answer/6085339?ref_topic=6085325).
    """
    
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountName') }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountNumber') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    organization_info: Optional[OrganizationInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationInfo') }})
    permission_level: Optional[AccountPermissionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionLevel') }})
    role: Optional[AccountRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    state: Optional[AccountState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    type: Optional[AccountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import organizationinfo

class AccountPermissionLevelEnum(str, Enum):
    PERMISSION_LEVEL_UNSPECIFIED = "PERMISSION_LEVEL_UNSPECIFIED"
    OWNER_LEVEL = "OWNER_LEVEL"
    MEMBER_LEVEL = "MEMBER_LEVEL"

class AccountRoleEnum(str, Enum):
    ACCOUNT_ROLE_UNSPECIFIED = "ACCOUNT_ROLE_UNSPECIFIED"
    PRIMARY_OWNER = "PRIMARY_OWNER"
    OWNER = "OWNER"
    MANAGER = "MANAGER"
    SITE_MANAGER = "SITE_MANAGER"

class AccountTypeEnum(str, Enum):
    ACCOUNT_TYPE_UNSPECIFIED = "ACCOUNT_TYPE_UNSPECIFIED"
    PERSONAL = "PERSONAL"
    LOCATION_GROUP = "LOCATION_GROUP"
    USER_GROUP = "USER_GROUP"
    ORGANIZATION = "ORGANIZATION"

class AccountVerificationStateEnum(str, Enum):
    VERIFICATION_STATE_UNSPECIFIED = "VERIFICATION_STATE_UNSPECIFIED"
    VERIFIED = "VERIFIED"
    UNVERIFIED = "UNVERIFIED"
    VERIFICATION_REQUESTED = "VERIFICATION_REQUESTED"

class AccountVettedStateEnum(str, Enum):
    VETTED_STATE_UNSPECIFIED = "VETTED_STATE_UNSPECIFIED"
    NOT_VETTED = "NOT_VETTED"
    VETTED = "VETTED"
    INVALID = "INVALID"


@dataclass_json
@dataclass
class Account:
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountName' }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountNumber' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    organization_info: Optional[organizationinfo.OrganizationInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationInfo' }})
    permission_level: Optional[AccountPermissionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionLevel' }})
    primary_owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryOwner' }})
    role: Optional[AccountRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    type: Optional[AccountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    verification_state: Optional[AccountVerificationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationState' }})
    vetted_state: Optional[AccountVettedStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vettedState' }})
    

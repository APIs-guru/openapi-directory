from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ProfileAuthenticationTypeEnum(str, Enum):
    PASSWORD = "password"
    GITHUB = "github"

class ProfileLishAuthMethodEnum(str, Enum):
    PASSWORD_KEYS = "password_keys"
    KEYS_ONLY = "keys_only"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class ProfileReferrals:
    r"""ProfileReferrals
    Information about your status in our referral program.
    
    This information becomes accessible after this Profile's Account has established at least $25.00 USD of total payments.
    
    """
    
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    completed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed') }})
    credit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credit') }})
    pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pending') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ProfileInput:
    r"""ProfileInput
    A Profile represents your User in our system. This is where you can change information about your User. This information is available to any OAuth Client regardless of requested scopes, and can be used to populate User information in third-party applications.
    
    """
    
    authorized_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized_keys') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    email_notifications: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_notifications') }})
    ip_whitelist_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_whitelist_enabled') }})
    lish_auth_method: Optional[ProfileLishAuthMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lish_auth_method') }})
    restricted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restricted') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    two_factor_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('two_factor_auth') }})
    

@dataclass_json
@dataclass
class Profile:
    r"""Profile
    A Profile represents your User in our system. This is where you can change information about your User. This information is available to any OAuth Client regardless of requested scopes, and can be used to populate User information in third-party applications.
    
    """
    
    authentication_type: Optional[ProfileAuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authentication_type') }})
    authorized_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized_keys') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    email_notifications: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_notifications') }})
    ip_whitelist_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_whitelist_enabled') }})
    lish_auth_method: Optional[ProfileLishAuthMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lish_auth_method') }})
    referrals: Optional[ProfileReferrals] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referrals') }})
    restricted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restricted') }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timezone') }})
    two_factor_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('two_factor_auth') }})
    uid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

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
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    completed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed' }})
    credit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credit' }})
    pending: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pending' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class Profile:
    authentication_type: Optional[ProfileAuthenticationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authentication_type' }})
    authorized_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorized_keys' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    email_notifications: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_notifications' }})
    ip_whitelist_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_whitelist_enabled' }})
    lish_auth_method: Optional[ProfileLishAuthMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lish_auth_method' }})
    referrals: Optional[ProfileReferrals] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referrals' }})
    restricted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restricted' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    two_factor_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'two_factor_auth' }})
    uid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

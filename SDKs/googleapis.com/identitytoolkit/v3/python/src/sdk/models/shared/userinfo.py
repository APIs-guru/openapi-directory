from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UserInfoProviderUserInfo:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    federated_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federatedId' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoUrl' }})
    provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerId' }})
    raw_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawId' }})
    screen_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenName' }})
    

@dataclass_json
@dataclass
class UserInfo:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    custom_attributes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customAttributes' }})
    custom_auth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customAuth' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    email_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailVerified' }})
    last_login_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastLoginAt' }})
    local_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localId' }})
    password_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordHash' }})
    password_updated_at: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passwordUpdatedAt' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photoUrl' }})
    provider_user_info: Optional[List[UserInfoProviderUserInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'providerUserInfo' }})
    raw_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawPassword' }})
    salt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salt' }})
    screen_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenName' }})
    valid_since: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validSince' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

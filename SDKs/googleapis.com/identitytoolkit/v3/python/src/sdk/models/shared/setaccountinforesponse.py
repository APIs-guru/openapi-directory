from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SetAccountInfoResponseProviderUserInfo:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    federated_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('federatedId') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photoUrl') }})
    provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerId') }})
    

@dataclass_json
@dataclass
class SetAccountInfoResponse:
    r"""SetAccountInfoResponse
    Respone of setting the account information.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    email_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailVerified') }})
    expires_in: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresIn') }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idToken') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    local_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localId') }})
    new_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newEmail') }})
    password_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordHash') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photoUrl') }})
    provider_user_info: Optional[List[SetAccountInfoResponseProviderUserInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerUserInfo') }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshToken') }})
    

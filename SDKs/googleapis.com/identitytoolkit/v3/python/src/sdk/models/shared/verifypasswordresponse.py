from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VerifyPasswordResponse:
    r"""VerifyPasswordResponse
    Request of verifying the password.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    expires_in: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresIn') }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idToken') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    local_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localId') }})
    oauth_access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthAccessToken') }})
    oauth_authorization_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthAuthorizationCode') }})
    oauth_expire_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthExpireIn') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photoUrl') }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshToken') }})
    registered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registered') }})
    

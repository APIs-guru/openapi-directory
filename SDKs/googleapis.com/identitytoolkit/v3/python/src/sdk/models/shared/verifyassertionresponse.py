from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VerifyAssertionResponse:
    r"""VerifyAssertionResponse
    Response of verifying the IDP assertion.
    """
    
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    app_installation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appInstallationUrl') }})
    app_scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appScheme') }})
    context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    date_of_birth: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOfBirth') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    email_recycled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailRecycled') }})
    email_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailVerified') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    expires_in: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresIn') }})
    federated_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('federatedId') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullName') }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idToken') }})
    input_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputEmail') }})
    is_new_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isNewUser') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    local_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localId') }})
    need_confirmation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('needConfirmation') }})
    need_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('needEmail') }})
    nick_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nickName') }})
    oauth_access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthAccessToken') }})
    oauth_authorization_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthAuthorizationCode') }})
    oauth_expire_in: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthExpireIn') }})
    oauth_id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthIdToken') }})
    oauth_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthRequestToken') }})
    oauth_scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthScope') }})
    oauth_token_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauthTokenSecret') }})
    original_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalEmail') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photoUrl') }})
    provider_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('providerId') }})
    raw_user_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawUserInfo') }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshToken') }})
    screen_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenName') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    verified_provider: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifiedProvider') }})
    

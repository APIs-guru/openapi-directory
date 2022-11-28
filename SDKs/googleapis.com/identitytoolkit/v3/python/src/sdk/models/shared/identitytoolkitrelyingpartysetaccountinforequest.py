from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartySetAccountInfoRequest:
    r"""IdentitytoolkitRelyingpartySetAccountInfoRequest
    Request to set the account information.
    """
    
    captcha_challenge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('captchaChallenge') }})
    captcha_response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('captchaResponse') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    custom_attributes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customAttributes') }})
    delegated_project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delegatedProjectNumber') }})
    delete_attribute: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteAttribute') }})
    delete_provider: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteProvider') }})
    disable_user: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disableUser') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    email_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailVerified') }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idToken') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    last_login_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastLoginAt') }})
    local_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localId') }})
    oob_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oobCode') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photoUrl') }})
    provider: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    return_secure_token: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnSecureToken') }})
    upgrade_to_federated_login: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeToFederatedLogin') }})
    valid_since: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validSince') }})
    

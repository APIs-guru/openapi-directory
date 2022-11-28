from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartySignupNewUserRequest:
    r"""IdentitytoolkitRelyingpartySignupNewUserRequest
    Request to signup new user, create anonymous user or anonymous user reauth.
    """
    
    captcha_challenge: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('captchaChallenge') }})
    captcha_response: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('captchaResponse') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    email_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailVerified') }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idToken') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceId') }})
    local_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localId') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photoUrl') }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantId') }})
    tenant_project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantProjectNumber') }})
    

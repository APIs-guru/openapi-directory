from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse:
    r"""GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse
    FinalizeMfaSignIn response.
    """
    
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idToken') }})
    phone_auth_info: Optional[GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneAuthInfo') }})
    refresh_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refreshToken') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitV2StartMfaSignInResponse:
    r"""GoogleCloudIdentitytoolkitV2StartMfaSignInResponse
    StartMfaSignIn response.
    """
    
    phone_response_info: Optional[GoogleCloudIdentitytoolkitV2StartMfaPhoneResponseInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneResponseInfo') }})
    

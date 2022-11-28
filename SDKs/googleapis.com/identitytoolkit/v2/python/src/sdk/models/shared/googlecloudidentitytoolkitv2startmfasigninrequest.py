from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitV2StartMfaSignInRequest:
    r"""GoogleCloudIdentitytoolkitV2StartMfaSignInRequest
    Starts multi-factor sign-in by sending the multi-factor auth challenge.
    """
    
    mfa_enrollment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaEnrollmentId') }})
    mfa_pending_credential: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaPendingCredential') }})
    phone_sign_in_info: Optional[GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneSignInInfo') }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantId') }})
    

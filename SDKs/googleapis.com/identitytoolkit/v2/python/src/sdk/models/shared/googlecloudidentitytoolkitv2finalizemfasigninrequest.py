from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest:
    r"""GoogleCloudIdentitytoolkitV2FinalizeMfaSignInRequest
    Finalizes sign-in by verifying MFA challenge.
    """
    
    mfa_pending_credential: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaPendingCredential') }})
    phone_verification_info: Optional[GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneVerificationInfo') }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantId') }})
    

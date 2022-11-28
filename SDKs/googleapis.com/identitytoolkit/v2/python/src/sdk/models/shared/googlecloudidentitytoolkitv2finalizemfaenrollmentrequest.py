from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest:
    r"""GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentRequest
    Finishes enrolling a second factor for the user.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idToken') }})
    phone_verification_info: Optional[GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneVerificationInfo') }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantId') }})
    

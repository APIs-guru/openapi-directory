from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest:
    r"""GoogleCloudIdentitytoolkitV2StartMfaEnrollmentRequest
    Sends MFA enrollment verification SMS for a user.
    """
    
    id_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idToken') }})
    phone_enrollment_info: Optional[GoogleCloudIdentitytoolkitV2StartMfaPhoneRequestInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneEnrollmentInfo') }})
    tenant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenantId') }})
    

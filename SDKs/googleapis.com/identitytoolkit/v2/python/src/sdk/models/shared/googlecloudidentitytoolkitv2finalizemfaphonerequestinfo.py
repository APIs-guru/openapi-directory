from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo:
    r"""GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneRequestInfo
    Phone Verification info for a FinalizeMfa request.
    """
    
    android_verification_proof: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidVerificationProof') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    session_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionInfo') }})
    

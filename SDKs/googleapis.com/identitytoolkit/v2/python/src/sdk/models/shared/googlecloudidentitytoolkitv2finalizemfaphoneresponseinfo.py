from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo:
    r"""GoogleCloudIdentitytoolkitV2FinalizeMfaPhoneResponseInfo
    Phone Verification info for a FinalizeMfa response.
    """
    
    android_verification_proof: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidVerificationProof') }})
    android_verification_proof_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidVerificationProofExpireTime') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    

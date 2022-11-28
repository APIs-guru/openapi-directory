from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VerifyPhoneNumberRequestPhoneVerificationMethodEnum(str, Enum):
    PHONE_VERIFICATION_METHOD_UNSPECIFIED = "PHONE_VERIFICATION_METHOD_UNSPECIFIED"
    SMS = "SMS"
    PHONE_CALL = "PHONE_CALL"


@dataclass_json
@dataclass
class VerifyPhoneNumberRequest:
    r"""VerifyPhoneNumberRequest
    Request message for the VerifyPhoneNumber method.
    """
    
    phone_verification_method: Optional[VerifyPhoneNumberRequestPhoneVerificationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneVerificationMethod') }})
    verification_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationCode') }})
    verification_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationId') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RequestPhoneVerificationRequestPhoneVerificationMethodEnum(str, Enum):
    PHONE_VERIFICATION_METHOD_UNSPECIFIED = "PHONE_VERIFICATION_METHOD_UNSPECIFIED"
    SMS = "SMS"
    PHONE_CALL = "PHONE_CALL"


@dataclass_json
@dataclass
class RequestPhoneVerificationRequest:
    r"""RequestPhoneVerificationRequest
    Request message for the RequestPhoneVerification method.
    """
    
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    phone_region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneRegionCode') }})
    phone_verification_method: Optional[RequestPhoneVerificationRequestPhoneVerificationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneVerificationMethod') }})
    

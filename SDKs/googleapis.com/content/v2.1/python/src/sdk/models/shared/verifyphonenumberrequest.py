from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VerifyPhoneNumberRequestPhoneVerificationMethodEnum(str, Enum):
    PHONE_VERIFICATION_METHOD_UNSPECIFIED = "PHONE_VERIFICATION_METHOD_UNSPECIFIED"
    SMS = "SMS"
    PHONE_CALL = "PHONE_CALL"


@dataclass_json
@dataclass
class VerifyPhoneNumberRequest:
    phone_verification_method: Optional[VerifyPhoneNumberRequestPhoneVerificationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneVerificationMethod' }})
    verification_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationCode' }})
    verification_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationId' }})
    

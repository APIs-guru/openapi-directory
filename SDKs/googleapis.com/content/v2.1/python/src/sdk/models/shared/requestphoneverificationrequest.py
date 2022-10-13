from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RequestPhoneVerificationRequestPhoneVerificationMethodEnum(str, Enum):
    PHONE_VERIFICATION_METHOD_UNSPECIFIED = "PHONE_VERIFICATION_METHOD_UNSPECIFIED"
    SMS = "SMS"
    PHONE_CALL = "PHONE_CALL"


@dataclass_json
@dataclass
class RequestPhoneVerificationRequest:
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    phone_region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneRegionCode' }})
    phone_verification_method: Optional[RequestPhoneVerificationRequestPhoneVerificationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneVerificationMethod' }})
    

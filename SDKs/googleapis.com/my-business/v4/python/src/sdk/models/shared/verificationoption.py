from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import addressverificationdata
from . import emailverificationdata
from . import phoneverificationdata

class VerificationOptionVerificationMethodEnum(str, Enum):
    VERIFICATION_METHOD_UNSPECIFIED = "VERIFICATION_METHOD_UNSPECIFIED"
    ADDRESS = "ADDRESS"
    EMAIL = "EMAIL"
    PHONE_CALL = "PHONE_CALL"
    SMS = "SMS"
    AUTO = "AUTO"


@dataclass_json
@dataclass
class VerificationOption:
    address_data: Optional[addressverificationdata.AddressVerificationData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressData' }})
    email_data: Optional[emailverificationdata.EmailVerificationData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailData' }})
    phone_data: Optional[phoneverificationdata.PhoneVerificationData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneData' }})
    verification_method: Optional[VerificationOptionVerificationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationMethod' }})
    

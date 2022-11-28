from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""VerificationOption
    The verification option represents how to verify the location (indicated by verification method) and where the verification will be sent to (indicated by display data).
    """
    
    address_data: Optional[AddressVerificationData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressData') }})
    email_data: Optional[EmailVerificationData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailData') }})
    phone_data: Optional[PhoneVerificationData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneData') }})
    verification_method: Optional[VerificationOptionVerificationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationMethod') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VerifyLocationRequestMethodEnum(str, Enum):
    VERIFICATION_METHOD_UNSPECIFIED = "VERIFICATION_METHOD_UNSPECIFIED"
    ADDRESS = "ADDRESS"
    EMAIL = "EMAIL"
    PHONE_CALL = "PHONE_CALL"
    SMS = "SMS"
    AUTO = "AUTO"


@dataclass_json
@dataclass
class VerifyLocationRequest:
    r"""VerifyLocationRequest
    Request message for Verifications.VerifyLocation.
    """
    
    address_input: Optional[AddressInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressInput') }})
    context: Optional[ServiceBusinessContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    email_input: Optional[EmailInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailInput') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    method: Optional[VerifyLocationRequestMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    phone_input: Optional[PhoneInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneInput') }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import addressinput
from . import servicebusinesscontext
from . import emailinput
from . import phoneinput

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
    address_input: Optional[addressinput.AddressInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressInput' }})
    context: Optional[servicebusinesscontext.ServiceBusinessContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    email_input: Optional[emailinput.EmailInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailInput' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    method: Optional[VerifyLocationRequestMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    phone_input: Optional[phoneinput.PhoneInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneInput' }})
    

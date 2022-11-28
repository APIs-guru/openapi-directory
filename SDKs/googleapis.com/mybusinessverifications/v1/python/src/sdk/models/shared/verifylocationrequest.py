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
    VETTED_PARTNER = "VETTED_PARTNER"


@dataclass_json
@dataclass
class VerifyLocationRequest:
    r"""VerifyLocationRequest
    Request message for Verifications.VerifyLocation.
    """
    
    context: Optional[ServiceBusinessContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    mailer_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailerContact') }})
    method: Optional[VerifyLocationRequestMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    token: Optional[VerificationToken] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

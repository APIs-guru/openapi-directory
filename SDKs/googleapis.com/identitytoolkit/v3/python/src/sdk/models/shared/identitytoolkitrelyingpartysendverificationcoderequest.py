from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartySendVerificationCodeRequest:
    ios_receipt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosReceipt' }})
    ios_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosSecret' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    recaptcha_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recaptchaToken' }})
    

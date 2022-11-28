from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartySendVerificationCodeRequest:
    r"""IdentitytoolkitRelyingpartySendVerificationCodeRequest
    Request for Identitytoolkit-SendVerificationCode
    """
    
    ios_receipt: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosReceipt') }})
    ios_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosSecret') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    recaptcha_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recaptchaToken') }})
    

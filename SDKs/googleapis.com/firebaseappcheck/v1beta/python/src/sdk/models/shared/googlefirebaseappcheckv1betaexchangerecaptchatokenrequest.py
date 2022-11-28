from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest:
    r"""GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest
    Request message for the ExchangeRecaptchaToken method.
    """
    
    recaptcha_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recaptchaToken') }})
    

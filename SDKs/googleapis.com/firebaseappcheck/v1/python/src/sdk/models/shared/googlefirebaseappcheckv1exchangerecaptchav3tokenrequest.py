from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest:
    recaptcha_v3_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recaptchaV3Token' }})
    

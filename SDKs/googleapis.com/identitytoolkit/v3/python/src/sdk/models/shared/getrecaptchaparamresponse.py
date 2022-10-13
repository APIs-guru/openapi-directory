from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetRecaptchaParamResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    recaptcha_site_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recaptchaSiteKey' }})
    recaptcha_stoken: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recaptchaStoken' }})
    

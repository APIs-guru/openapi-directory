from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1betaRecaptchaV3Config:
    r"""GoogleFirebaseAppcheckV1betaRecaptchaV3Config
    An app's reCAPTCHA v3 configuration object. This configuration is used by ExchangeRecaptchaV3Token to validate reCAPTCHA tokens issued to apps by reCAPTCHA v3. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteSecret') }})
    site_secret_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteSecretSet') }})
    token_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenTtl') }})
    

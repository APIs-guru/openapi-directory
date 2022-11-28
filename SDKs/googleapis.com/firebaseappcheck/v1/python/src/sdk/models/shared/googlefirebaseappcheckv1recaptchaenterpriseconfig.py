from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig:
    r"""GoogleFirebaseAppcheckV1RecaptchaEnterpriseConfig
    An app's reCAPTCHA Enterprise configuration object. This configuration is used by ExchangeRecaptchaEnterpriseToken to validate reCAPTCHA tokens issued to apps by reCAPTCHA Enterprise. It also controls certain properties of the returned `AppCheckToken`, such as its ttl.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteKey') }})
    token_ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokenTtl') }})
    

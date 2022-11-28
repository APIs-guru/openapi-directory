from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse:
    r"""GoogleCloudRecaptchaenterpriseV1RetrieveLegacySecretKeyResponse
    Secret key is used only in legacy reCAPTCHA. It must be used in a 3rd party integration with legacy reCAPTCHA.
    """
    
    legacy_secret_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacySecretKey') }})
    

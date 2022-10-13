from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum(str, Enum):
    CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED = "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED"
    USABILITY = "USABILITY"
    BALANCE = "BALANCE"
    SECURITY = "SECURITY"

class GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum(str, Enum):
    INTEGRATION_TYPE_UNSPECIFIED = "INTEGRATION_TYPE_UNSPECIFIED"
    SCORE = "SCORE"
    CHECKBOX = "CHECKBOX"
    INVISIBLE = "INVISIBLE"


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1WebKeySettings:
    allow_all_domains: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowAllDomains' }})
    allow_amp_traffic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowAmpTraffic' }})
    allowed_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowedDomains' }})
    challenge_security_preference: Optional[GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'challengeSecurityPreference' }})
    integration_type: Optional[GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integrationType' }})
    

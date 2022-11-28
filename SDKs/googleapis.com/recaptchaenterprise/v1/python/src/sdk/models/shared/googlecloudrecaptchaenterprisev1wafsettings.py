from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum(str, Enum):
    WAF_FEATURE_UNSPECIFIED = "WAF_FEATURE_UNSPECIFIED"
    CHALLENGE_PAGE = "CHALLENGE_PAGE"
    SESSION_TOKEN = "SESSION_TOKEN"
    ACTION_TOKEN = "ACTION_TOKEN"

class GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum(str, Enum):
    WAF_SERVICE_UNSPECIFIED = "WAF_SERVICE_UNSPECIFIED"
    CA = "CA"


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1WafSettings:
    r"""GoogleCloudRecaptchaenterpriseV1WafSettings
    Settings specific to keys that can be used for WAF (Web Application Firewall).
    """
    
    waf_feature: Optional[GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wafFeature') }})
    waf_service: Optional[GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wafService') }})
    

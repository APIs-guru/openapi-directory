from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1Key:
    r"""GoogleCloudRecaptchaenterpriseV1Key
    A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise.
    """
    
    android_settings: Optional[GoogleCloudRecaptchaenterpriseV1AndroidKeySettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidSettings') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    ios_settings: Optional[GoogleCloudRecaptchaenterpriseV1IosKeySettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosSettings') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    testing_options: Optional[GoogleCloudRecaptchaenterpriseV1TestingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testingOptions') }})
    waf_settings: Optional[GoogleCloudRecaptchaenterpriseV1WafSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wafSettings') }})
    web_settings: Optional[GoogleCloudRecaptchaenterpriseV1WebKeySettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webSettings') }})
    

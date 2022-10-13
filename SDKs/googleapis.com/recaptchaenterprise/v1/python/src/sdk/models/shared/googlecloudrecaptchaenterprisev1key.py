from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googlecloudrecaptchaenterprisev1androidkeysettings
from . import googlecloudrecaptchaenterprisev1ioskeysettings
from . import googlecloudrecaptchaenterprisev1testingoptions
from . import googlecloudrecaptchaenterprisev1wafsettings
from . import googlecloudrecaptchaenterprisev1webkeysettings


@dataclass_json
@dataclass
class GoogleCloudRecaptchaenterpriseV1Key:
    android_settings: Optional[googlecloudrecaptchaenterprisev1androidkeysettings.GoogleCloudRecaptchaenterpriseV1AndroidKeySettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidSettings' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    ios_settings: Optional[googlecloudrecaptchaenterprisev1ioskeysettings.GoogleCloudRecaptchaenterpriseV1IosKeySettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosSettings' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    testing_options: Optional[googlecloudrecaptchaenterprisev1testingoptions.GoogleCloudRecaptchaenterpriseV1TestingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testingOptions' }})
    waf_settings: Optional[googlecloudrecaptchaenterprisev1wafsettings.GoogleCloudRecaptchaenterpriseV1WafSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wafSettings' }})
    web_settings: Optional[googlecloudrecaptchaenterprisev1webkeysettings.GoogleCloudRecaptchaenterpriseV1WebKeySettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webSettings' }})
    

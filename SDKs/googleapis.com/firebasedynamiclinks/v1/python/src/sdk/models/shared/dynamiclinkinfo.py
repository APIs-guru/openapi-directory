from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DynamicLinkInfo:
    r"""DynamicLinkInfo
    Information about a Dynamic Link.
    """
    
    analytics_info: Optional[AnalyticsInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyticsInfo') }})
    android_info: Optional[AndroidInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('androidInfo') }})
    desktop_info: Optional[DesktopInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('desktopInfo') }})
    domain_uri_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainUriPrefix') }})
    dynamic_link_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dynamicLinkDomain') }})
    ios_info: Optional[IosInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iosInfo') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    navigation_info: Optional[NavigationInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('navigationInfo') }})
    social_meta_tag_info: Optional[SocialMetaTagInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socialMetaTagInfo') }})
    

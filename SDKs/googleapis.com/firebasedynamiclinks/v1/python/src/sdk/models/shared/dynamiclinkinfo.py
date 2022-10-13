from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import analyticsinfo
from . import androidinfo
from . import desktopinfo
from . import iosinfo
from . import navigationinfo
from . import socialmetataginfo


@dataclass_json
@dataclass
class DynamicLinkInfo:
    analytics_info: Optional[analyticsinfo.AnalyticsInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'analyticsInfo' }})
    android_info: Optional[androidinfo.AndroidInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidInfo' }})
    desktop_info: Optional[desktopinfo.DesktopInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desktopInfo' }})
    domain_uri_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainUriPrefix' }})
    dynamic_link_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dynamicLinkDomain' }})
    ios_info: Optional[iosinfo.IosInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iosInfo' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    navigation_info: Optional[navigationinfo.NavigationInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'navigationInfo' }})
    social_meta_tag_info: Optional[socialmetataginfo.SocialMetaTagInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'socialMetaTagInfo' }})
    

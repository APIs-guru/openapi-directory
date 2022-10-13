from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DynamicLinkEventStatEventEnum(str, Enum):
    DYNAMIC_LINK_EVENT_UNSPECIFIED = "DYNAMIC_LINK_EVENT_UNSPECIFIED"
    CLICK = "CLICK"
    REDIRECT = "REDIRECT"
    APP_INSTALL = "APP_INSTALL"
    APP_FIRST_OPEN = "APP_FIRST_OPEN"
    APP_RE_OPEN = "APP_RE_OPEN"

class DynamicLinkEventStatPlatformEnum(str, Enum):
    DYNAMIC_LINK_PLATFORM_UNSPECIFIED = "DYNAMIC_LINK_PLATFORM_UNSPECIFIED"
    ANDROID = "ANDROID"
    IOS = "IOS"
    DESKTOP = "DESKTOP"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class DynamicLinkEventStat:
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    event: Optional[DynamicLinkEventStatEventEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    platform: Optional[DynamicLinkEventStatPlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WmxSitemapContentTypeEnum(str, Enum):
    WEB = "WEB"
    IMAGE = "IMAGE"
    VIDEO = "VIDEO"
    NEWS = "NEWS"
    MOBILE = "MOBILE"
    ANDROID_APP = "ANDROID_APP"
    PATTERN = "PATTERN"
    IOS_APP = "IOS_APP"
    DATA_FEED_ELEMENT = "DATA_FEED_ELEMENT"


@dataclass_json
@dataclass
class WmxSitemapContent:
    indexed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indexed' }})
    submitted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'submitted' }})
    type: Optional[WmxSitemapContentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

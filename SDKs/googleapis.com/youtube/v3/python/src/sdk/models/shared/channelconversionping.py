from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ChannelConversionPingContextEnum(str, Enum):
    SUBSCRIBE = "subscribe"
    UNSUBSCRIBE = "unsubscribe"
    CVIEW = "cview"


@dataclass_json
@dataclass
class ChannelConversionPing:
    context: Optional[ChannelConversionPingContextEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    conversion_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversionUrl' }})
    

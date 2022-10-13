from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ChannelChannelTypeEnum(str, Enum):
    CHANNEL_TYPE_UNSPECIFIED = "CHANNEL_TYPE_UNSPECIFIED"
    STABLE = "STABLE"
    BETA = "BETA"
    DEV = "DEV"
    CANARY = "CANARY"
    CANARY_ASAN = "CANARY_ASAN"
    ALL = "ALL"
    EXTENDED = "EXTENDED"


@dataclass_json
@dataclass
class Channel:
    channel_type: Optional[ChannelChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

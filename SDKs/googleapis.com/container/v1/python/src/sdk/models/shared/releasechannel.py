from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ReleaseChannelChannelEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    RAPID = "RAPID"
    REGULAR = "REGULAR"
    STABLE = "STABLE"


@dataclass_json
@dataclass
class ReleaseChannel:
    channel: Optional[ReleaseChannelChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChannelAssignedTargetingOptionDetails:
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelId' }})
    negative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'negative' }})
    

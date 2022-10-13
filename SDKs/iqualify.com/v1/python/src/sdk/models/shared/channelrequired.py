from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChannelRequired:
    is_broadcast_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isBroadcastOnly' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

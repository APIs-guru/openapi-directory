from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AudioChannelInput:
    channel: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    gain_db: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gainDb' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    track: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'track' }})
    

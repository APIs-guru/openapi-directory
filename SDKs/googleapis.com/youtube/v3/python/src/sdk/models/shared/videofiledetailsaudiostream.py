from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoFileDetailsAudioStream:
    bitrate_bps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitrateBps' }})
    channel_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelCount' }})
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codec' }})
    vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendor' }})
    

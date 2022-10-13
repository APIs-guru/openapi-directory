from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import audiomapping


@dataclass_json
@dataclass
class AudioStream:
    bitrate_bps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitrateBps' }})
    channel_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelCount' }})
    channel_layout: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelLayout' }})
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codec' }})
    mapping: Optional[List[audiomapping.AudioMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mapping' }})
    sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleRateHertz' }})
    

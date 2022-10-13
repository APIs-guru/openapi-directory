from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dimensions


@dataclass_json
@dataclass
class Transcode:
    audio_bit_rate_kbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioBitRateKbps' }})
    audio_sample_rate_hz: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioSampleRateHz' }})
    bit_rate_kbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitRateKbps' }})
    dimensions: Optional[dimensions.Dimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    file_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileSizeBytes' }})
    frame_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameRate' }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mimeType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    transcoded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcoded' }})
    

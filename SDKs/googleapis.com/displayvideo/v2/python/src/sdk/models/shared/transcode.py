from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Transcode:
    r"""Transcode
    Represents information about the transcoded audio or video file.
    """
    
    audio_bit_rate_kbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioBitRateKbps') }})
    audio_sample_rate_hz: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioSampleRateHz') }})
    bit_rate_kbps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitRateKbps') }})
    dimensions: Optional[Dimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    file_size_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileSizeBytes') }})
    frame_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameRate') }})
    mime_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mimeType') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    transcoded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transcoded') }})
    

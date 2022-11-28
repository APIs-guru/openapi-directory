from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VideoFileDetailsAudioStream:
    r"""VideoFileDetailsAudioStream
    Information about an audio stream.
    """
    
    bitrate_bps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrateBps') }})
    channel_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCount') }})
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codec') }})
    vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vendor') }})
    

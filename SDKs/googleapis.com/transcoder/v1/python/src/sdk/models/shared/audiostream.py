from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AudioStream:
    r"""AudioStream
    Audio stream resource.
    """
    
    bitrate_bps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrateBps') }})
    channel_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCount') }})
    channel_layout: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelLayout') }})
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codec') }})
    mapping: Optional[List[AudioMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mapping') }})
    sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleRateHertz') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AudioChannelInput:
    r"""AudioChannelInput
    Identifies which input file, track, and channel should be used.
    """
    
    channel: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    gain_db: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gainDb') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    track: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('track') }})
    

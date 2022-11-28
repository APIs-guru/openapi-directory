from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AnimationEnd:
    r"""AnimationEnd
    End previous overlay animation from the video. Without AnimationEnd, the overlay object will keep the state of previous animation until the end of the video.
    """
    
    start_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeOffset') }})
    

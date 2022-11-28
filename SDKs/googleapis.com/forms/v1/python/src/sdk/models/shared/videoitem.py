from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VideoItem:
    r"""VideoItem
    An item containing a video.
    """
    
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    video: Optional[Video] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    

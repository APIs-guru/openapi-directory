from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VideoStream:
    r"""VideoStream
    Video stream resource.
    """
    
    h264: Optional[H264CodecSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('h264') }})
    h265: Optional[H265CodecSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('h265') }})
    vp9: Optional[Vp9CodecSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vp9') }})
    

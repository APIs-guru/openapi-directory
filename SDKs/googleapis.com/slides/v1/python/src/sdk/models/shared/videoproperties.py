from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VideoProperties:
    r"""VideoProperties
    The properties of the Video.
    """
    
    auto_play: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoPlay') }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    mute: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mute') }})
    outline: Optional[Outline] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outline') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AnimationFadeFadeTypeEnum(str, Enum):
    FADE_TYPE_UNSPECIFIED = "FADE_TYPE_UNSPECIFIED"
    FADE_IN = "FADE_IN"
    FADE_OUT = "FADE_OUT"


@dataclass_json
@dataclass
class AnimationFade:
    r"""AnimationFade
    Display overlay object with fade animation.
    """
    
    end_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTimeOffset') }})
    fade_type: Optional[AnimationFadeFadeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fadeType') }})
    start_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeOffset') }})
    xy: Optional[NormalizedCoordinate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xy') }})
    

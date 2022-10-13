from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import normalizedcoordinate

class AnimationFadeFadeTypeEnum(str, Enum):
    FADE_TYPE_UNSPECIFIED = "FADE_TYPE_UNSPECIFIED"
    FADE_IN = "FADE_IN"
    FADE_OUT = "FADE_OUT"


@dataclass_json
@dataclass
class AnimationFade:
    end_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTimeOffset' }})
    fade_type: Optional[AnimationFadeFadeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fadeType' }})
    start_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTimeOffset' }})
    xy: Optional[normalizedcoordinate.NormalizedCoordinate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xy' }})
    

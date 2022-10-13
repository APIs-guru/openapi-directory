from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VideoFileDetailsVideoStreamRotationEnum(str, Enum):
    NONE = "none"
    CLOCKWISE = "clockwise"
    UPSIDE_DOWN = "upsideDown"
    COUNTER_CLOCKWISE = "counterClockwise"
    OTHER = "other"


@dataclass_json
@dataclass
class VideoFileDetailsVideoStream:
    aspect_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aspectRatio' }})
    bitrate_bps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitrateBps' }})
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codec' }})
    frame_rate_fps: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameRateFps' }})
    height_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heightPixels' }})
    rotation: Optional[VideoFileDetailsVideoStreamRotationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rotation' }})
    vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vendor' }})
    width_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'widthPixels' }})
    

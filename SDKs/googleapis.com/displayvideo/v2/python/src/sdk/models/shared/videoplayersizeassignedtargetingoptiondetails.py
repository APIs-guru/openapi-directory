from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum(str, Enum):
    VIDEO_PLAYER_SIZE_UNSPECIFIED = "VIDEO_PLAYER_SIZE_UNSPECIFIED"
    VIDEO_PLAYER_SIZE_SMALL = "VIDEO_PLAYER_SIZE_SMALL"
    VIDEO_PLAYER_SIZE_LARGE = "VIDEO_PLAYER_SIZE_LARGE"
    VIDEO_PLAYER_SIZE_HD = "VIDEO_PLAYER_SIZE_HD"
    VIDEO_PLAYER_SIZE_UNKNOWN = "VIDEO_PLAYER_SIZE_UNKNOWN"


@dataclass_json
@dataclass
class VideoPlayerSizeAssignedTargetingOptionDetails:
    video_player_size: Optional[VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videoPlayerSize' }})
    

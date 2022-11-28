from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum(str, Enum):
    VIDEO_PLAYER_SIZE_UNSPECIFIED = "VIDEO_PLAYER_SIZE_UNSPECIFIED"
    VIDEO_PLAYER_SIZE_SMALL = "VIDEO_PLAYER_SIZE_SMALL"
    VIDEO_PLAYER_SIZE_LARGE = "VIDEO_PLAYER_SIZE_LARGE"
    VIDEO_PLAYER_SIZE_HD = "VIDEO_PLAYER_SIZE_HD"
    VIDEO_PLAYER_SIZE_UNKNOWN = "VIDEO_PLAYER_SIZE_UNKNOWN"


@dataclass_json
@dataclass
class VideoPlayerSizeAssignedTargetingOptionDetails:
    r"""VideoPlayerSizeAssignedTargetingOptionDetails
    Video player size targeting option details. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`. Explicitly targeting all options is not supported. Remove all video player size targeting options to achieve this effect.
    """
    
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    video_player_size: Optional[VideoPlayerSizeAssignedTargetingOptionDetailsVideoPlayerSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoPlayerSize') }})
    

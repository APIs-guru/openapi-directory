from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VideoPlayerSizeTargetingOptionDetailsVideoPlayerSizeEnum(str, Enum):
    VIDEO_PLAYER_SIZE_UNSPECIFIED = "VIDEO_PLAYER_SIZE_UNSPECIFIED"
    VIDEO_PLAYER_SIZE_SMALL = "VIDEO_PLAYER_SIZE_SMALL"
    VIDEO_PLAYER_SIZE_LARGE = "VIDEO_PLAYER_SIZE_LARGE"
    VIDEO_PLAYER_SIZE_HD = "VIDEO_PLAYER_SIZE_HD"
    VIDEO_PLAYER_SIZE_UNKNOWN = "VIDEO_PLAYER_SIZE_UNKNOWN"


@dataclass_json
@dataclass
class VideoPlayerSizeTargetingOptionDetails:
    r"""VideoPlayerSizeTargetingOptionDetails
    Represents a targetable video player size. This will be populated in the video_player_size_details field when targeting_type is `TARGETING_TYPE_VIDEO_PLAYER_SIZE`.
    """
    
    video_player_size: Optional[VideoPlayerSizeTargetingOptionDetailsVideoPlayerSizeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoPlayerSize') }})
    

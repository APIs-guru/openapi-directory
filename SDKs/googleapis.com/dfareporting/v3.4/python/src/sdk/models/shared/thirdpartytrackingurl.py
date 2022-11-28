from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ThirdPartyTrackingURLThirdPartyURLTypeEnum(str, Enum):
    IMPRESSION = "IMPRESSION"
    CLICK_TRACKING = "CLICK_TRACKING"
    VIDEO_START = "VIDEO_START"
    VIDEO_FIRST_QUARTILE = "VIDEO_FIRST_QUARTILE"
    VIDEO_MIDPOINT = "VIDEO_MIDPOINT"
    VIDEO_THIRD_QUARTILE = "VIDEO_THIRD_QUARTILE"
    VIDEO_COMPLETE = "VIDEO_COMPLETE"
    VIDEO_MUTE = "VIDEO_MUTE"
    VIDEO_PAUSE = "VIDEO_PAUSE"
    VIDEO_REWIND = "VIDEO_REWIND"
    VIDEO_FULLSCREEN = "VIDEO_FULLSCREEN"
    VIDEO_STOP = "VIDEO_STOP"
    VIDEO_CUSTOM = "VIDEO_CUSTOM"
    SURVEY = "SURVEY"
    RICH_MEDIA_IMPRESSION = "RICH_MEDIA_IMPRESSION"
    RICH_MEDIA_RM_IMPRESSION = "RICH_MEDIA_RM_IMPRESSION"
    RICH_MEDIA_BACKUP_IMPRESSION = "RICH_MEDIA_BACKUP_IMPRESSION"
    VIDEO_SKIP = "VIDEO_SKIP"
    VIDEO_PROGRESS = "VIDEO_PROGRESS"


@dataclass_json
@dataclass
class ThirdPartyTrackingURL:
    r"""ThirdPartyTrackingURL
    Third-party Tracking URL.
    """
    
    third_party_url_type: Optional[ThirdPartyTrackingURLThirdPartyURLTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyUrlType') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

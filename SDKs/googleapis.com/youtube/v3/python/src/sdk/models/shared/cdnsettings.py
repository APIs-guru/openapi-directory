from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CdnSettingsFrameRateEnum(str, Enum):
    THIRTYFPS = "30fps"
    SIXTYFPS = "60fps"
    VARIABLE = "variable"

class CdnSettingsIngestionTypeEnum(str, Enum):
    RTMP = "rtmp"
    DASH = "dash"
    WEBRTC = "webrtc"
    HLS = "hls"

class CdnSettingsResolutionEnum(str, Enum):
    TWO_HUNDRED_AND_FORTYP = "240p"
    THREE_HUNDRED_AND_SIXTYP = "360p"
    FOUR_HUNDRED_AND_EIGHTYP = "480p"
    SEVEN_HUNDRED_AND_TWENTYP = "720p"
    ONE_THOUSAND_AND_EIGHTYP = "1080p"
    ONE_THOUSAND_FOUR_HUNDRED_AND_FORTYP = "1440p"
    TWO_THOUSAND_ONE_HUNDRED_AND_SIXTYP = "2160p"
    VARIABLE = "variable"


@dataclass_json
@dataclass
class CdnSettings:
    r"""CdnSettings
    Brief description of the live stream cdn settings.
    """
    
    format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    frame_rate: Optional[CdnSettingsFrameRateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameRate') }})
    ingestion_info: Optional[IngestionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingestionInfo') }})
    ingestion_type: Optional[CdnSettingsIngestionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingestionType') }})
    resolution: Optional[CdnSettingsResolutionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    

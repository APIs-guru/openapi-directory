from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LiveStreamConfigurationIssueSeverityEnum(str, Enum):
    INFO = "info"
    WARNING = "warning"
    ERROR = "error"

class LiveStreamConfigurationIssueTypeEnum(str, Enum):
    GOP_SIZE_OVER = "gopSizeOver"
    GOP_SIZE_LONG = "gopSizeLong"
    GOP_SIZE_SHORT = "gopSizeShort"
    OPEN_GOP = "openGop"
    BAD_CONTAINER = "badContainer"
    AUDIO_BITRATE_HIGH = "audioBitrateHigh"
    AUDIO_BITRATE_LOW = "audioBitrateLow"
    AUDIO_SAMPLE_RATE = "audioSampleRate"
    BITRATE_HIGH = "bitrateHigh"
    BITRATE_LOW = "bitrateLow"
    AUDIO_CODEC = "audioCodec"
    VIDEO_CODEC = "videoCodec"
    NO_AUDIO_STREAM = "noAudioStream"
    NO_VIDEO_STREAM = "noVideoStream"
    MULTIPLE_VIDEO_STREAMS = "multipleVideoStreams"
    MULTIPLE_AUDIO_STREAMS = "multipleAudioStreams"
    AUDIO_TOO_MANY_CHANNELS = "audioTooManyChannels"
    INTERLACED_VIDEO = "interlacedVideo"
    FRAME_RATE_HIGH = "frameRateHigh"
    RESOLUTION_MISMATCH = "resolutionMismatch"
    VIDEO_CODEC_MISMATCH = "videoCodecMismatch"
    VIDEO_INTERLACE_MISMATCH = "videoInterlaceMismatch"
    VIDEO_PROFILE_MISMATCH = "videoProfileMismatch"
    VIDEO_BITRATE_MISMATCH = "videoBitrateMismatch"
    FRAMERATE_MISMATCH = "framerateMismatch"
    GOP_MISMATCH = "gopMismatch"
    AUDIO_SAMPLE_RATE_MISMATCH = "audioSampleRateMismatch"
    AUDIO_STEREO_MISMATCH = "audioStereoMismatch"
    AUDIO_CODEC_MISMATCH = "audioCodecMismatch"
    AUDIO_BITRATE_MISMATCH = "audioBitrateMismatch"
    VIDEO_RESOLUTION_SUBOPTIMAL = "videoResolutionSuboptimal"
    VIDEO_RESOLUTION_UNSUPPORTED = "videoResolutionUnsupported"
    VIDEO_INGESTION_STARVED = "videoIngestionStarved"
    VIDEO_INGESTION_FASTER_THAN_REALTIME = "videoIngestionFasterThanRealtime"


@dataclass_json
@dataclass
class LiveStreamConfigurationIssue:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    severity: Optional[LiveStreamConfigurationIssueSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    type: Optional[LiveStreamConfigurationIssueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

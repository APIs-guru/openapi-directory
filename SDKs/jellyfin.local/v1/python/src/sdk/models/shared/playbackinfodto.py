from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlaybackInfoDto:
    r"""PlaybackInfoDto
    Plabyback info dto.
    """
    
    allow_audio_stream_copy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowAudioStreamCopy') }})
    allow_video_stream_copy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllowVideoStreamCopy') }})
    audio_stream_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AudioStreamIndex') }})
    auto_open_live_stream: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoOpenLiveStream') }})
    device_profile: Optional[DeviceProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceProfile') }})
    enable_direct_play: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableDirectPlay') }})
    enable_direct_stream: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableDirectStream') }})
    enable_transcoding: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableTranscoding') }})
    live_stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LiveStreamId') }})
    max_audio_channels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAudioChannels') }})
    max_streaming_bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxStreamingBitrate') }})
    media_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaSourceId') }})
    start_time_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTimeTicks') }})
    subtitle_stream_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubtitleStreamIndex') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OpenLiveStreamDto:
    r"""OpenLiveStreamDto
    Open live stream dto.
    """
    
    audio_stream_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AudioStreamIndex') }})
    device_profile: Optional[DeviceProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceProfile') }})
    direct_play_protocols: Optional[List[MediaProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectPlayProtocols') }})
    enable_direct_play: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableDirectPlay') }})
    enable_direct_stream: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableDirectStream') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemId') }})
    max_audio_channels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAudioChannels') }})
    max_streaming_bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxStreamingBitrate') }})
    open_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OpenToken') }})
    play_session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlaySessionId') }})
    start_time_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTimeTicks') }})
    subtitle_stream_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubtitleStreamIndex') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    

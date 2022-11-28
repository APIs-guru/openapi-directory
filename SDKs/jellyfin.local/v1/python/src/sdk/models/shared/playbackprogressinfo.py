from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlaybackProgressInfoInput:
    r"""PlaybackProgressInfoInput
    Class PlaybackProgressInfo.
    """
    
    aspect_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AspectRatio') }})
    audio_stream_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AudioStreamIndex') }})
    brightness: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Brightness') }})
    can_seek: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CanSeek') }})
    is_muted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsMuted') }})
    is_paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPaused') }})
    item: Optional[BaseItemDtoInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Item') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemId') }})
    live_stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LiveStreamId') }})
    media_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaSourceId') }})
    now_playing_queue: Optional[List[QueueItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NowPlayingQueue') }})
    play_method: Optional[PlayMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayMethod') }})
    play_session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlaySessionId') }})
    playback_start_time_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlaybackStartTimeTicks') }})
    playlist_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlaylistItemId') }})
    position_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PositionTicks') }})
    repeat_mode: Optional[RepeatModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepeatMode') }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionId') }})
    subtitle_stream_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubtitleStreamIndex') }})
    volume_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeLevel') }})
    

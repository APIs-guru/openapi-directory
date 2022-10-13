from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import baseitemdto
from . import queueitem
from . import playmethod_enum
from . import repeatmode_enum


@dataclass_json
@dataclass
class PlaybackProgressInfo:
    aspect_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AspectRatio' }})
    audio_stream_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AudioStreamIndex' }})
    brightness: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Brightness' }})
    can_seek: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CanSeek' }})
    is_muted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsMuted' }})
    is_paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsPaused' }})
    item: Optional[baseitemdto.BaseItemDto] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Item' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemId' }})
    live_stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LiveStreamId' }})
    media_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaSourceId' }})
    now_playing_queue: Optional[List[queueitem.QueueItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NowPlayingQueue' }})
    play_method: Optional[playmethod_enum.PlayMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayMethod' }})
    play_session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlaySessionId' }})
    playback_start_time_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlaybackStartTimeTicks' }})
    playlist_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlaylistItemId' }})
    position_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PositionTicks' }})
    repeat_mode: Optional[repeatmode_enum.RepeatModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepeatMode' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionId' }})
    subtitle_stream_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubtitleStreamIndex' }})
    volume_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeLevel' }})
    

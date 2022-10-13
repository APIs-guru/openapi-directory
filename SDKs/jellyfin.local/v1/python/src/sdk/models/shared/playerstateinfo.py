from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import playmethod_enum
from . import repeatmode_enum


@dataclass_json
@dataclass
class PlayerStateInfo:
    audio_stream_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AudioStreamIndex' }})
    can_seek: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CanSeek' }})
    is_muted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsMuted' }})
    is_paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsPaused' }})
    media_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaSourceId' }})
    play_method: Optional[playmethod_enum.PlayMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayMethod' }})
    position_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PositionTicks' }})
    repeat_mode: Optional[repeatmode_enum.RepeatModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RepeatMode' }})
    subtitle_stream_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubtitleStreamIndex' }})
    volume_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeLevel' }})
    

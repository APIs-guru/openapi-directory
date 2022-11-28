from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlayerStateInfo:
    audio_stream_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AudioStreamIndex') }})
    can_seek: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CanSeek') }})
    is_muted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsMuted') }})
    is_paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPaused') }})
    media_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaSourceId') }})
    play_method: Optional[PlayMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayMethod') }})
    position_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PositionTicks') }})
    repeat_mode: Optional[RepeatModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RepeatMode') }})
    subtitle_stream_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubtitleStreamIndex') }})
    volume_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeLevel') }})
    

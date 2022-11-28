from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TranscodingInfo:
    audio_channels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AudioChannels') }})
    audio_codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AudioCodec') }})
    bitrate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bitrate') }})
    completion_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CompletionPercentage') }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Container') }})
    framerate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Framerate') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Height') }})
    is_audio_direct: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsAudioDirect') }})
    is_video_direct: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsVideoDirect') }})
    transcode_reasons: Optional[List[TranscodeReasonEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscodeReasons') }})
    video_codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VideoCodec') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Width') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TranscodingProfile:
    audio_codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AudioCodec') }})
    break_on_non_key_frames: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BreakOnNonKeyFrames') }})
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Container') }})
    context: Optional[EncodingContextEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Context') }})
    copy_timestamps: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CopyTimestamps') }})
    enable_mpegts_m2_ts_mode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableMpegtsM2TsMode') }})
    enable_subtitles_in_manifest: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableSubtitlesInManifest') }})
    estimate_content_length: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EstimateContentLength') }})
    max_audio_channels: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxAudioChannels') }})
    min_segments: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MinSegments') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    segment_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SegmentLength') }})
    transcode_seek_info: Optional[TranscodeSeekInfoEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscodeSeekInfo') }})
    type: Optional[DlnaProfileTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    video_codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VideoCodec') }})
    

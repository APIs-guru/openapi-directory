from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Vp9CodecSettings:
    r"""Vp9CodecSettings
    VP9 codec settings.
    """
    
    bitrate_bps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitrateBps') }})
    crf_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('crfLevel') }})
    frame_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameRate') }})
    gop_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gopDuration') }})
    gop_frame_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gopFrameCount') }})
    height_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heightPixels') }})
    pixel_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pixelFormat') }})
    profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    rate_control_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateControlMode') }})
    width_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('widthPixels') }})
    

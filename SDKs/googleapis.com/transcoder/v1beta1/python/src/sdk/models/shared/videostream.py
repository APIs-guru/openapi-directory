from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoStream:
    allow_open_gop: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowOpenGop' }})
    aq_strength: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aqStrength' }})
    b_frame_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bFrameCount' }})
    b_pyramid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bPyramid' }})
    bitrate_bps: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitrateBps' }})
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codec' }})
    crf_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'crfLevel' }})
    enable_two_pass: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableTwoPass' }})
    entropy_coder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entropyCoder' }})
    frame_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameRate' }})
    gop_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gopDuration' }})
    gop_frame_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gopFrameCount' }})
    height_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heightPixels' }})
    pixel_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pixelFormat' }})
    preset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preset' }})
    profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    rate_control_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateControlMode' }})
    tune: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tune' }})
    vbv_fullness_bits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vbvFullnessBits' }})
    vbv_size_bits: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vbvSizeBits' }})
    width_pixels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'widthPixels' }})
    

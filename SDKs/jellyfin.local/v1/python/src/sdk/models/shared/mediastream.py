from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import subtitledeliverymethod_enum
from . import mediastreamtype_enum


@dataclass_json
@dataclass
class MediaStream:
    aspect_ratio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AspectRatio' }})
    average_frame_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AverageFrameRate' }})
    bit_depth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BitDepth' }})
    bit_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BitRate' }})
    channel_layout: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelLayout' }})
    channels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Channels' }})
    codec: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Codec' }})
    codec_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodecTag' }})
    codec_time_base: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodecTimeBase' }})
    color_primaries: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColorPrimaries' }})
    color_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColorRange' }})
    color_space: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColorSpace' }})
    color_transfer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ColorTransfer' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Comment' }})
    delivery_method: Optional[subtitledeliverymethod_enum.SubtitleDeliveryMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryMethod' }})
    delivery_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryUrl' }})
    display_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DisplayTitle' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Height' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Index' }})
    is_avc: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsAVC' }})
    is_anamorphic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsAnamorphic' }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsDefault' }})
    is_external: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsExternal' }})
    is_external_url: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsExternalUrl' }})
    is_forced: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsForced' }})
    is_interlaced: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsInterlaced' }})
    is_text_subtitle_stream: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsTextSubtitleStream' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Language' }})
    level: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Level' }})
    nal_length_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NalLengthSize' }})
    packet_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PacketLength' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    pixel_format: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PixelFormat' }})
    profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Profile' }})
    real_frame_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RealFrameRate' }})
    ref_frames: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RefFrames' }})
    sample_rate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SampleRate' }})
    score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Score' }})
    supports_external_stream: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SupportsExternalStream' }})
    time_base: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeBase' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    type: Optional[mediastreamtype_enum.MediaStreamTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    video_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VideoRange' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Width' }})
    localized_default: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizedDefault' }})
    localized_forced: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizedForced' }})
    localized_undefined: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localizedUndefined' }})
    

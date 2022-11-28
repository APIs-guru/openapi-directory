from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAudioStreamPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAudioStreamQueryParams:
    allow_audio_stream_copy: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allowAudioStreamCopy', 'style': 'form', 'explode': True }})
    allow_video_stream_copy: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'allowVideoStreamCopy', 'style': 'form', 'explode': True }})
    audio_bit_rate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'audioBitRate', 'style': 'form', 'explode': True }})
    audio_channels: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'audioChannels', 'style': 'form', 'explode': True }})
    audio_codec: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'audioCodec', 'style': 'form', 'explode': True }})
    audio_sample_rate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'audioSampleRate', 'style': 'form', 'explode': True }})
    audio_stream_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'audioStreamIndex', 'style': 'form', 'explode': True }})
    break_on_non_key_frames: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'breakOnNonKeyFrames', 'style': 'form', 'explode': True }})
    container: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'container', 'style': 'form', 'explode': True }})
    context: Optional[shared.EncodingContextEnum] = field(default=None, metadata={'query_param': { 'field_name': 'context', 'style': 'form', 'explode': True }})
    copy_timestamps: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'copyTimestamps', 'style': 'form', 'explode': True }})
    cpu_core_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'cpuCoreLimit', 'style': 'form', 'explode': True }})
    de_interlace: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'deInterlace', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    device_profile_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deviceProfileId', 'style': 'form', 'explode': True }})
    enable_auto_stream_copy: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableAutoStreamCopy', 'style': 'form', 'explode': True }})
    enable_mpegts_m2_ts_mode: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableMpegtsM2TsMode', 'style': 'form', 'explode': True }})
    framerate: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'framerate', 'style': 'form', 'explode': True }})
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    level: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'level', 'style': 'form', 'explode': True }})
    live_stream_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'liveStreamId', 'style': 'form', 'explode': True }})
    max_audio_bit_depth: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxAudioBitDepth', 'style': 'form', 'explode': True }})
    max_audio_channels: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxAudioChannels', 'style': 'form', 'explode': True }})
    max_framerate: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'maxFramerate', 'style': 'form', 'explode': True }})
    max_ref_frames: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxRefFrames', 'style': 'form', 'explode': True }})
    max_video_bit_depth: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxVideoBitDepth', 'style': 'form', 'explode': True }})
    media_source_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mediaSourceId', 'style': 'form', 'explode': True }})
    min_segments: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minSegments', 'style': 'form', 'explode': True }})
    params: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'params', 'style': 'form', 'explode': True }})
    play_session_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'playSessionId', 'style': 'form', 'explode': True }})
    profile: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'profile', 'style': 'form', 'explode': True }})
    require_avc: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'requireAvc', 'style': 'form', 'explode': True }})
    require_non_anamorphic: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'requireNonAnamorphic', 'style': 'form', 'explode': True }})
    segment_container: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'segmentContainer', 'style': 'form', 'explode': True }})
    segment_length: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'segmentLength', 'style': 'form', 'explode': True }})
    start_time_ticks: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startTimeTicks', 'style': 'form', 'explode': True }})
    static: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'static', 'style': 'form', 'explode': True }})
    stream_options: Optional[dict[str, str]] = field(default=None, metadata={'query_param': { 'field_name': 'streamOptions', 'style': 'form', 'explode': True }})
    subtitle_codec: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subtitleCodec', 'style': 'form', 'explode': True }})
    subtitle_method: Optional[shared.SubtitleDeliveryMethodEnum] = field(default=None, metadata={'query_param': { 'field_name': 'subtitleMethod', 'style': 'form', 'explode': True }})
    subtitle_stream_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'subtitleStreamIndex', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    transcode_reasons: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transcodeReasons', 'style': 'form', 'explode': True }})
    transcoding_max_audio_channels: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'transcodingMaxAudioChannels', 'style': 'form', 'explode': True }})
    video_bit_rate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'videoBitRate', 'style': 'form', 'explode': True }})
    video_codec: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'videoCodec', 'style': 'form', 'explode': True }})
    video_stream_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'videoStreamIndex', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAudioStreamRequest:
    path_params: GetAudioStreamPathParams = field()
    query_params: GetAudioStreamQueryParams = field()
    

@dataclass
class GetAudioStreamResponse:
    content_type: str = field()
    status_code: int = field()
    get_audio_stream_200_audio_wildcard_binary_string: Optional[bytes] = field(default=None)
    

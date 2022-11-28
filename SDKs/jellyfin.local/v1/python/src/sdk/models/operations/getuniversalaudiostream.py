from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUniversalAudioStreamPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUniversalAudioStreamQueryParams:
    audio_bit_rate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'audioBitRate', 'style': 'form', 'explode': True }})
    audio_codec: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'audioCodec', 'style': 'form', 'explode': True }})
    break_on_non_key_frames: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'breakOnNonKeyFrames', 'style': 'form', 'explode': True }})
    container: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'container', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deviceId', 'style': 'form', 'explode': True }})
    enable_redirection: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableRedirection', 'style': 'form', 'explode': True }})
    enable_remote_media: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableRemoteMedia', 'style': 'form', 'explode': True }})
    max_audio_bit_depth: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxAudioBitDepth', 'style': 'form', 'explode': True }})
    max_audio_channels: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxAudioChannels', 'style': 'form', 'explode': True }})
    max_audio_sample_rate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxAudioSampleRate', 'style': 'form', 'explode': True }})
    max_streaming_bitrate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxStreamingBitrate', 'style': 'form', 'explode': True }})
    media_source_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mediaSourceId', 'style': 'form', 'explode': True }})
    start_time_ticks: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startTimeTicks', 'style': 'form', 'explode': True }})
    transcoding_audio_channels: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'transcodingAudioChannels', 'style': 'form', 'explode': True }})
    transcoding_container: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transcodingContainer', 'style': 'form', 'explode': True }})
    transcoding_protocol: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transcodingProtocol', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUniversalAudioStreamSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUniversalAudioStreamRequest:
    path_params: GetUniversalAudioStreamPathParams = field()
    query_params: GetUniversalAudioStreamQueryParams = field()
    security: GetUniversalAudioStreamSecurity = field()
    

@dataclass
class GetUniversalAudioStreamResponse:
    content_type: str = field()
    status_code: int = field()
    get_universal_audio_stream_200_audio_wildcard_binary_string: Optional[bytes] = field(default=None)
    

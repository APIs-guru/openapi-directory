from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OpenLiveStreamQueryParams:
    audio_stream_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'audioStreamIndex', 'style': 'form', 'explode': True }})
    enable_direct_play: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableDirectPlay', 'style': 'form', 'explode': True }})
    enable_direct_stream: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'enableDirectStream', 'style': 'form', 'explode': True }})
    item_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'itemId', 'style': 'form', 'explode': True }})
    max_audio_channels: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxAudioChannels', 'style': 'form', 'explode': True }})
    max_streaming_bitrate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxStreamingBitrate', 'style': 'form', 'explode': True }})
    open_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'openToken', 'style': 'form', 'explode': True }})
    play_session_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'playSessionId', 'style': 'form', 'explode': True }})
    start_time_ticks: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'startTimeTicks', 'style': 'form', 'explode': True }})
    subtitle_stream_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'subtitleStreamIndex', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class OpenLiveStreamRequests:
    open_live_stream_dto: Optional[shared.OpenLiveStreamDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    open_live_stream_dto1: Optional[shared.OpenLiveStreamDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    open_live_stream_dto2: Optional[shared.OpenLiveStreamDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class OpenLiveStreamSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class OpenLiveStreamRequest:
    query_params: OpenLiveStreamQueryParams = field(default=None)
    request: Optional[OpenLiveStreamRequests] = field(default=None)
    security: OpenLiveStreamSecurity = field(default=None)
    

@dataclass
class OpenLiveStreamResponse:
    content_type: str = field(default=None)
    live_stream_response: Optional[shared.LiveStreamResponse] = field(default=None)
    status_code: int = field(default=None)
    

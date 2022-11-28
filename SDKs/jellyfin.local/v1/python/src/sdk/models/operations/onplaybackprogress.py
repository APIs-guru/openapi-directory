from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class OnPlaybackProgressPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class OnPlaybackProgressQueryParams:
    audio_stream_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'audioStreamIndex', 'style': 'form', 'explode': True }})
    is_muted: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isMuted', 'style': 'form', 'explode': True }})
    is_paused: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isPaused', 'style': 'form', 'explode': True }})
    live_stream_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'liveStreamId', 'style': 'form', 'explode': True }})
    media_source_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mediaSourceId', 'style': 'form', 'explode': True }})
    play_method: Optional[shared.PlayMethodEnum] = field(default=None, metadata={'query_param': { 'field_name': 'playMethod', 'style': 'form', 'explode': True }})
    play_session_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'playSessionId', 'style': 'form', 'explode': True }})
    position_ticks: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'positionTicks', 'style': 'form', 'explode': True }})
    repeat_mode: Optional[shared.RepeatModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'repeatMode', 'style': 'form', 'explode': True }})
    subtitle_stream_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'subtitleStreamIndex', 'style': 'form', 'explode': True }})
    volume_level: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'volumeLevel', 'style': 'form', 'explode': True }})
    

@dataclass
class OnPlaybackProgressSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class OnPlaybackProgressRequest:
    path_params: OnPlaybackProgressPathParams = field()
    query_params: OnPlaybackProgressQueryParams = field()
    security: OnPlaybackProgressSecurity = field()
    

@dataclass
class OnPlaybackProgressResponse:
    content_type: str = field()
    status_code: int = field()
    

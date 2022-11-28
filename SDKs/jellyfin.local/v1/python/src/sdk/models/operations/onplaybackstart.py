from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class OnPlaybackStartPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class OnPlaybackStartQueryParams:
    audio_stream_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'audioStreamIndex', 'style': 'form', 'explode': True }})
    can_seek: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'canSeek', 'style': 'form', 'explode': True }})
    live_stream_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'liveStreamId', 'style': 'form', 'explode': True }})
    media_source_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mediaSourceId', 'style': 'form', 'explode': True }})
    play_method: Optional[shared.PlayMethodEnum] = field(default=None, metadata={'query_param': { 'field_name': 'playMethod', 'style': 'form', 'explode': True }})
    play_session_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'playSessionId', 'style': 'form', 'explode': True }})
    subtitle_stream_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'subtitleStreamIndex', 'style': 'form', 'explode': True }})
    

@dataclass
class OnPlaybackStartSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class OnPlaybackStartRequest:
    path_params: OnPlaybackStartPathParams = field()
    query_params: OnPlaybackStartQueryParams = field()
    security: OnPlaybackStartSecurity = field()
    

@dataclass
class OnPlaybackStartResponse:
    content_type: str = field()
    status_code: int = field()
    

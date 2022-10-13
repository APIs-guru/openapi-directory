from dataclasses import dataclass, field
from typing import Optional


@dataclass
class OnPlaybackStoppedPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class OnPlaybackStoppedQueryParams:
    live_stream_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'liveStreamId', 'style': 'form', 'explode': True }})
    media_source_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mediaSourceId', 'style': 'form', 'explode': True }})
    next_media_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextMediaType', 'style': 'form', 'explode': True }})
    play_session_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'playSessionId', 'style': 'form', 'explode': True }})
    position_ticks: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'positionTicks', 'style': 'form', 'explode': True }})
    

@dataclass
class OnPlaybackStoppedSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class OnPlaybackStoppedRequest:
    path_params: OnPlaybackStoppedPathParams = field(default=None)
    query_params: OnPlaybackStoppedQueryParams = field(default=None)
    security: OnPlaybackStoppedSecurity = field(default=None)
    

@dataclass
class OnPlaybackStoppedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

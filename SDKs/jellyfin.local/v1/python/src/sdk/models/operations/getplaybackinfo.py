from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPlaybackInfoPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPlaybackInfoQueryParams:
    user_id: str = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlaybackInfoSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPlaybackInfoRequest:
    path_params: GetPlaybackInfoPathParams = field(default=None)
    query_params: GetPlaybackInfoQueryParams = field(default=None)
    security: GetPlaybackInfoSecurity = field(default=None)
    

@dataclass
class GetPlaybackInfoResponse:
    content_type: str = field(default=None)
    playback_info_response: Optional[shared.PlaybackInfoResponse] = field(default=None)
    status_code: int = field(default=None)
    

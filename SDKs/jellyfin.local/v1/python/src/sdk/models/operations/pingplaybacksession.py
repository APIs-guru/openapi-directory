from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PingPlaybackSessionQueryParams:
    play_session_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'playSessionId', 'style': 'form', 'explode': True }})
    

@dataclass
class PingPlaybackSessionSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PingPlaybackSessionRequest:
    query_params: PingPlaybackSessionQueryParams = field()
    security: PingPlaybackSessionSecurity = field()
    

@dataclass
class PingPlaybackSessionResponse:
    content_type: str = field()
    status_code: int = field()
    

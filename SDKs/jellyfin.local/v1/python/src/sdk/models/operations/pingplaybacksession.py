from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PingPlaybackSessionQueryParams:
    play_session_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'playSessionId', 'style': 'form', 'explode': True }})
    

@dataclass
class PingPlaybackSessionSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PingPlaybackSessionRequest:
    query_params: PingPlaybackSessionQueryParams = field(default=None)
    security: PingPlaybackSessionSecurity = field(default=None)
    

@dataclass
class PingPlaybackSessionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

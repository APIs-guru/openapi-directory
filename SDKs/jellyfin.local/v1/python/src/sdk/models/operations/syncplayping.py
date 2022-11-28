from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncPlayPingRequests:
    ping_request_dto: Optional[shared.PingRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    ping_request_dto1: Optional[shared.PingRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    ping_request_dto2: Optional[shared.PingRequestDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SyncPlayPingSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayPingRequest:
    request: SyncPlayPingRequests = field()
    security: SyncPlayPingSecurity = field()
    

@dataclass
class SyncPlayPingResponse:
    content_type: str = field()
    status_code: int = field()
    

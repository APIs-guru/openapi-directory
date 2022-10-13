from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncPlayReadyRequests:
    ready_request_dto: Optional[shared.ReadyRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    ready_request_dto1: Optional[shared.ReadyRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    ready_request_dto2: Optional[shared.ReadyRequestDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SyncPlayReadySecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayReadyRequest:
    request: SyncPlayReadyRequests = field(default=None)
    security: SyncPlayReadySecurity = field(default=None)
    

@dataclass
class SyncPlayReadyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

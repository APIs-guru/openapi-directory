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
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayReadyRequest:
    request: SyncPlayReadyRequests = field()
    security: SyncPlayReadySecurity = field()
    

@dataclass
class SyncPlayReadyResponse:
    content_type: str = field()
    status_code: int = field()
    

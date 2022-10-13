from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncPlaySetNewQueueRequests:
    play_request_dto: Optional[shared.PlayRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    play_request_dto1: Optional[shared.PlayRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    play_request_dto2: Optional[shared.PlayRequestDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SyncPlaySetNewQueueSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlaySetNewQueueRequest:
    request: SyncPlaySetNewQueueRequests = field(default=None)
    security: SyncPlaySetNewQueueSecurity = field(default=None)
    

@dataclass
class SyncPlaySetNewQueueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

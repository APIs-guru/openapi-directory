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
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlaySetNewQueueRequest:
    request: SyncPlaySetNewQueueRequests = field()
    security: SyncPlaySetNewQueueSecurity = field()
    

@dataclass
class SyncPlaySetNewQueueResponse:
    content_type: str = field()
    status_code: int = field()
    

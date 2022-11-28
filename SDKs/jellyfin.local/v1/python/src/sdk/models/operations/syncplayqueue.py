from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncPlayQueueRequests:
    queue_request_dto: Optional[shared.QueueRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    queue_request_dto1: Optional[shared.QueueRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    queue_request_dto2: Optional[shared.QueueRequestDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SyncPlayQueueSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayQueueRequest:
    request: SyncPlayQueueRequests = field()
    security: SyncPlayQueueSecurity = field()
    

@dataclass
class SyncPlayQueueResponse:
    content_type: str = field()
    status_code: int = field()
    

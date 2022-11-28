from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncPlaySetIgnoreWaitRequests:
    ignore_wait_request_dto: Optional[shared.IgnoreWaitRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    ignore_wait_request_dto1: Optional[shared.IgnoreWaitRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    ignore_wait_request_dto2: Optional[shared.IgnoreWaitRequestDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SyncPlaySetIgnoreWaitSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlaySetIgnoreWaitRequest:
    request: SyncPlaySetIgnoreWaitRequests = field()
    security: SyncPlaySetIgnoreWaitSecurity = field()
    

@dataclass
class SyncPlaySetIgnoreWaitResponse:
    content_type: str = field()
    status_code: int = field()
    

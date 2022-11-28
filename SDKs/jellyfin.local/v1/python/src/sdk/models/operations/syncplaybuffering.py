from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncPlayBufferingRequests:
    buffer_request_dto: Optional[shared.BufferRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    buffer_request_dto1: Optional[shared.BufferRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    buffer_request_dto2: Optional[shared.BufferRequestDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SyncPlayBufferingSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayBufferingRequest:
    request: SyncPlayBufferingRequests = field()
    security: SyncPlayBufferingSecurity = field()
    

@dataclass
class SyncPlayBufferingResponse:
    content_type: str = field()
    status_code: int = field()
    

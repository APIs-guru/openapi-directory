from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncPlaySeekRequests:
    seek_request_dto: Optional[shared.SeekRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    seek_request_dto1: Optional[shared.SeekRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    seek_request_dto2: Optional[shared.SeekRequestDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SyncPlaySeekSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlaySeekRequest:
    request: SyncPlaySeekRequests = field(default=None)
    security: SyncPlaySeekSecurity = field(default=None)
    

@dataclass
class SyncPlaySeekResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

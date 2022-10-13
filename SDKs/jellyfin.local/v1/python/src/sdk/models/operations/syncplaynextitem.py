from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncPlayNextItemRequests:
    next_item_request_dto: Optional[shared.NextItemRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    next_item_request_dto1: Optional[shared.NextItemRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    next_item_request_dto2: Optional[shared.NextItemRequestDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SyncPlayNextItemSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayNextItemRequest:
    request: SyncPlayNextItemRequests = field(default=None)
    security: SyncPlayNextItemSecurity = field(default=None)
    

@dataclass
class SyncPlayNextItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

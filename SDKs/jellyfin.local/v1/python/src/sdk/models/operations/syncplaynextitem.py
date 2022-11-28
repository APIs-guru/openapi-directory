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
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayNextItemRequest:
    request: SyncPlayNextItemRequests = field()
    security: SyncPlayNextItemSecurity = field()
    

@dataclass
class SyncPlayNextItemResponse:
    content_type: str = field()
    status_code: int = field()
    

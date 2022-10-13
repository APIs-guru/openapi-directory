from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncPlayPreviousItemRequests:
    previous_item_request_dto: Optional[shared.PreviousItemRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    previous_item_request_dto1: Optional[shared.PreviousItemRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    previous_item_request_dto2: Optional[shared.PreviousItemRequestDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SyncPlayPreviousItemSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayPreviousItemRequest:
    request: SyncPlayPreviousItemRequests = field(default=None)
    security: SyncPlayPreviousItemSecurity = field(default=None)
    

@dataclass
class SyncPlayPreviousItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

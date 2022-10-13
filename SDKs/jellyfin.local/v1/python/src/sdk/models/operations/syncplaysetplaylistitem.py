from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncPlaySetPlaylistItemRequests:
    set_playlist_item_request_dto: Optional[shared.SetPlaylistItemRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    set_playlist_item_request_dto1: Optional[shared.SetPlaylistItemRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    set_playlist_item_request_dto2: Optional[shared.SetPlaylistItemRequestDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SyncPlaySetPlaylistItemSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlaySetPlaylistItemRequest:
    request: SyncPlaySetPlaylistItemRequests = field(default=None)
    security: SyncPlaySetPlaylistItemSecurity = field(default=None)
    

@dataclass
class SyncPlaySetPlaylistItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncPlayMovePlaylistItemRequests:
    move_playlist_item_request_dto: Optional[shared.MovePlaylistItemRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    move_playlist_item_request_dto1: Optional[shared.MovePlaylistItemRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    move_playlist_item_request_dto2: Optional[shared.MovePlaylistItemRequestDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SyncPlayMovePlaylistItemSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayMovePlaylistItemRequest:
    request: SyncPlayMovePlaylistItemRequests = field(default=None)
    security: SyncPlayMovePlaylistItemSecurity = field(default=None)
    

@dataclass
class SyncPlayMovePlaylistItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

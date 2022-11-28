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
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayMovePlaylistItemRequest:
    request: SyncPlayMovePlaylistItemRequests = field()
    security: SyncPlayMovePlaylistItemSecurity = field()
    

@dataclass
class SyncPlayMovePlaylistItemResponse:
    content_type: str = field()
    status_code: int = field()
    

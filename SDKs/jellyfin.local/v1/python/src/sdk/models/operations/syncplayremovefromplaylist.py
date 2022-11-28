from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncPlayRemoveFromPlaylistRequests:
    remove_from_playlist_request_dto: Optional[shared.RemoveFromPlaylistRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    remove_from_playlist_request_dto1: Optional[shared.RemoveFromPlaylistRequestDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    remove_from_playlist_request_dto2: Optional[shared.RemoveFromPlaylistRequestDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SyncPlayRemoveFromPlaylistSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayRemoveFromPlaylistRequest:
    request: SyncPlayRemoveFromPlaylistRequests = field()
    security: SyncPlayRemoveFromPlaylistSecurity = field()
    

@dataclass
class SyncPlayRemoveFromPlaylistResponse:
    content_type: str = field()
    status_code: int = field()
    

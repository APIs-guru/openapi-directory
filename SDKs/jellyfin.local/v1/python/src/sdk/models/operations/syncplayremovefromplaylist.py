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
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SyncPlayRemoveFromPlaylistRequest:
    request: SyncPlayRemoveFromPlaylistRequests = field(default=None)
    security: SyncPlayRemoveFromPlaylistSecurity = field(default=None)
    

@dataclass
class SyncPlayRemoveFromPlaylistResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RemoveFromPlaylistPathParams:
    playlist_id: str = field(metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveFromPlaylistQueryParams:
    entry_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'entryIds', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveFromPlaylistSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RemoveFromPlaylistRequest:
    path_params: RemoveFromPlaylistPathParams = field()
    query_params: RemoveFromPlaylistQueryParams = field()
    security: RemoveFromPlaylistSecurity = field()
    

@dataclass
class RemoveFromPlaylistResponse:
    content_type: str = field()
    status_code: int = field()
    

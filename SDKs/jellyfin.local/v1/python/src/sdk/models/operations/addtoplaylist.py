from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class AddToPlaylistPathParams:
    playlist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddToPlaylistQueryParams:
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class AddToPlaylistSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddToPlaylistRequest:
    path_params: AddToPlaylistPathParams = field(default=None)
    query_params: AddToPlaylistQueryParams = field(default=None)
    security: AddToPlaylistSecurity = field(default=None)
    

@dataclass
class AddToPlaylistResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

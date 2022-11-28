from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddToPlaylistPathParams:
    playlist_id: str = field(metadata={'path_param': { 'field_name': 'playlistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddToPlaylistQueryParams:
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class AddToPlaylistSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddToPlaylistRequest:
    path_params: AddToPlaylistPathParams = field()
    query_params: AddToPlaylistQueryParams = field()
    security: AddToPlaylistSecurity = field()
    

@dataclass
class AddToPlaylistResponse:
    content_type: str = field()
    status_code: int = field()
    

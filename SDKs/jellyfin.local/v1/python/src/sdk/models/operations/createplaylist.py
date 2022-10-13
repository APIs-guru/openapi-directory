from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreatePlaylistQueryParams:
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    media_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mediaType', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class CreatePlaylistRequests:
    create_playlist_dto: Optional[shared.CreatePlaylistDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_playlist_dto1: Optional[shared.CreatePlaylistDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_playlist_dto2: Optional[shared.CreatePlaylistDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class CreatePlaylistSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreatePlaylistRequest:
    query_params: CreatePlaylistQueryParams = field(default=None)
    request: Optional[CreatePlaylistRequests] = field(default=None)
    security: CreatePlaylistSecurity = field(default=None)
    

@dataclass
class CreatePlaylistResponse:
    content_type: str = field(default=None)
    playlist_creation_result: Optional[shared.PlaylistCreationResult] = field(default=None)
    status_code: int = field(default=None)
    

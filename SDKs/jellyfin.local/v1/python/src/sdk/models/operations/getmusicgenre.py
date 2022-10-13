from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMusicGenrePathParams:
    genre_name: str = field(default=None, metadata={'path_param': { 'field_name': 'genreName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMusicGenreQueryParams:
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMusicGenreSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMusicGenreRequest:
    path_params: GetMusicGenrePathParams = field(default=None)
    query_params: GetMusicGenreQueryParams = field(default=None)
    security: GetMusicGenreSecurity = field(default=None)
    

@dataclass
class GetMusicGenreResponse:
    base_item_dto: Optional[shared.BaseItemDto] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

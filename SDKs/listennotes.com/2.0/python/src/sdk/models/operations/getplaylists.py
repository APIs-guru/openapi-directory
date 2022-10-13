from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetPlaylistsSortEnum(str, Enum):
    RECENT_ADDED_FIRST = "recent_added_first"
    OLDEST_ADDED_FIRST = "oldest_added_first"
    NAME_A_TO_Z = "name_a_to_z"
    NAME_Z_TO_A = "name_z_to_a"


@dataclass
class GetPlaylistsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort: Optional[GetPlaylistsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlaylistsHeaders:
    x_listen_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPlaylistsRequest:
    query_params: GetPlaylistsQueryParams = field(default=None)
    headers: GetPlaylistsHeaders = field(default=None)
    

@dataclass
class GetPlaylistsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    playlists_response: Optional[shared.PlaylistsResponse] = field(default=None)
    status_code: int = field(default=None)
    

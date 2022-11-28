from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
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
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPlaylistsRequest:
    headers: GetPlaylistsHeaders = field()
    query_params: GetPlaylistsQueryParams = field()
    

@dataclass
class GetPlaylistsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    playlists_response: Optional[shared.PlaylistsResponse] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetPlaylistByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetPlaylistByIDSortEnum(str, Enum):
    RECENT_ADDED_FIRST = "recent_added_first"
    OLDEST_ADDED_FIRST = "oldest_added_first"
    RECENT_PUBLISHED_FIRST = "recent_published_first"
    OLDEST_PUBLISHED_FIRST = "oldest_published_first"

class GetPlaylistByIDTypeEnum(str, Enum):
    EPISODE_LIST = "episode_list"
    PODCAST_LIST = "podcast_list"


@dataclass
class GetPlaylistByIDQueryParams:
    last_timestamp_ms: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'last_timestamp_ms', 'style': 'form', 'explode': True }})
    sort: Optional[GetPlaylistByIDSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[GetPlaylistByIDTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlaylistByIDHeaders:
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPlaylistByIDRequest:
    headers: GetPlaylistByIDHeaders = field()
    path_params: GetPlaylistByIDPathParams = field()
    query_params: GetPlaylistByIDQueryParams = field()
    

@dataclass
class GetPlaylistByIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    playlist_response: Optional[shared.PlaylistResponse] = field(default=None)
    

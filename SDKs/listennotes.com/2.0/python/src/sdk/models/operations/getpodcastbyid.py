from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetPodcastByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetPodcastByIDSortEnum(str, Enum):
    RECENT_FIRST = "recent_first"
    OLDEST_FIRST = "oldest_first"


@dataclass
class GetPodcastByIDQueryParams:
    next_episode_pub_date: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'next_episode_pub_date', 'style': 'form', 'explode': True }})
    sort: Optional[GetPodcastByIDSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPodcastByIDHeaders:
    x_listen_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPodcastByIDRequest:
    path_params: GetPodcastByIDPathParams = field(default=None)
    query_params: GetPodcastByIDQueryParams = field(default=None)
    headers: GetPodcastByIDHeaders = field(default=None)
    

@dataclass
class GetPodcastByIDResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    podcast_full: Optional[shared.PodcastFull] = field(default=None)
    status_code: int = field(default=None)
    

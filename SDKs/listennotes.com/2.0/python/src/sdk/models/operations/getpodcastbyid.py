from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetPodcastByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class GetPodcastByIDSortEnum(str, Enum):
    RECENT_FIRST = "recent_first"
    OLDEST_FIRST = "oldest_first"


@dataclass
class GetPodcastByIDQueryParams:
    next_episode_pub_date: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'next_episode_pub_date', 'style': 'form', 'explode': True }})
    sort: Optional[GetPodcastByIDSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPodcastByIDHeaders:
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPodcastByIDRequest:
    headers: GetPodcastByIDHeaders = field()
    path_params: GetPodcastByIDPathParams = field()
    query_params: GetPodcastByIDQueryParams = field()
    

@dataclass
class GetPodcastByIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    podcast_full: Optional[shared.PodcastFull] = field(default=None)
    

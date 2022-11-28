from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class SearchTypeEnum(str, Enum):
    EPISODE = "episode"
    PODCAST = "podcast"
    CURATED = "curated"


@dataclass
class SearchQueryParams:
    q: str = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    episode_count_max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'episode_count_max', 'style': 'form', 'explode': True }})
    episode_count_min: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'episode_count_min', 'style': 'form', 'explode': True }})
    genre_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'genre_ids', 'style': 'form', 'explode': True }})
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    len_max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'len_max', 'style': 'form', 'explode': True }})
    len_min: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'len_min', 'style': 'form', 'explode': True }})
    ncid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ncid', 'style': 'form', 'explode': True }})
    ocid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ocid', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    only_in: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'only_in', 'style': 'form', 'explode': True }})
    published_after: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'published_after', 'style': 'form', 'explode': True }})
    published_before: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'published_before', 'style': 'form', 'explode': True }})
    region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    safe_mode: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'safe_mode', 'style': 'form', 'explode': True }})
    sort_by_date: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by_date', 'style': 'form', 'explode': True }})
    type: Optional[SearchTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchHeaders:
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class SearchRequest:
    headers: SearchHeaders = field()
    query_params: SearchQueryParams = field()
    

@dataclass
class SearchResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    search_response: Optional[shared.SearchResponse] = field(default=None)
    

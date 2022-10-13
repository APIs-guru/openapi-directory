from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetBestPodcastsQueryParams:
    genre_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'genre_id', 'style': 'form', 'explode': True }})
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    publisher_region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'publisher_region', 'style': 'form', 'explode': True }})
    region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'region', 'style': 'form', 'explode': True }})
    safe_mode: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'safe_mode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBestPodcastsHeaders:
    x_listen_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBestPodcastsRequest:
    query_params: GetBestPodcastsQueryParams = field(default=None)
    headers: GetBestPodcastsHeaders = field(default=None)
    

@dataclass
class GetBestPodcastsResponse:
    best_podcasts_response: Optional[shared.BestPodcastsResponse] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

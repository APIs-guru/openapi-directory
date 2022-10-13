from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCuratedPodcastsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCuratedPodcastsHeaders:
    x_listen_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCuratedPodcastsRequest:
    query_params: GetCuratedPodcastsQueryParams = field(default=None)
    headers: GetCuratedPodcastsHeaders = field(default=None)
    

@dataclass
class GetCuratedPodcastsResponse:
    content_type: str = field(default=None)
    get_curated_podcasts_response: Optional[shared.GetCuratedPodcastsResponse] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    

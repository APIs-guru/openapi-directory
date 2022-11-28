from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCuratedPodcastsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCuratedPodcastsHeaders:
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCuratedPodcastsRequest:
    headers: GetCuratedPodcastsHeaders = field()
    query_params: GetCuratedPodcastsQueryParams = field()
    

@dataclass
class GetCuratedPodcastsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_curated_podcasts_response: Optional[shared.GetCuratedPodcastsResponse] = field(default=None)
    

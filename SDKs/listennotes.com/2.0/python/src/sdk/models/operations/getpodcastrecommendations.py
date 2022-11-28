from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPodcastRecommendationsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPodcastRecommendationsQueryParams:
    safe_mode: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'safe_mode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPodcastRecommendationsHeaders:
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPodcastRecommendationsRequest:
    headers: GetPodcastRecommendationsHeaders = field()
    path_params: GetPodcastRecommendationsPathParams = field()
    query_params: GetPodcastRecommendationsQueryParams = field()
    

@dataclass
class GetPodcastRecommendationsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_podcast_recommendations_response: Optional[shared.GetPodcastRecommendationsResponse] = field(default=None)
    

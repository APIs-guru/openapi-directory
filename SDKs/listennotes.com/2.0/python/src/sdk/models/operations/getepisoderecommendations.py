from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEpisodeRecommendationsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEpisodeRecommendationsQueryParams:
    safe_mode: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'safe_mode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEpisodeRecommendationsHeaders:
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEpisodeRecommendationsRequest:
    headers: GetEpisodeRecommendationsHeaders = field()
    path_params: GetEpisodeRecommendationsPathParams = field()
    query_params: GetEpisodeRecommendationsQueryParams = field()
    

@dataclass
class GetEpisodeRecommendationsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_episode_recommendations_response: Optional[shared.GetEpisodeRecommendationsResponse] = field(default=None)
    

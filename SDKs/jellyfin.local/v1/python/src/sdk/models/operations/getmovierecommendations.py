from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetMovieRecommendationsQueryParams:
    category_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'categoryLimit', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.ItemFieldsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    item_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'itemLimit', 'style': 'form', 'explode': True }})
    parent_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parentId', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMovieRecommendationsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetMovieRecommendationsRequest:
    query_params: GetMovieRecommendationsQueryParams = field(default=None)
    security: GetMovieRecommendationsSecurity = field(default=None)
    

@dataclass
class GetMovieRecommendationsResponse:
    content_type: str = field(default=None)
    recommendation_dtos: Optional[List[shared.RecommendationDto]] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCriticReviewsPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCriticReviewsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetCriticReviewsRequest:
    path_params: GetCriticReviewsPathParams = field(default=None)
    security: GetCriticReviewsSecurity = field(default=None)
    

@dataclass
class GetCriticReviewsResponse:
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

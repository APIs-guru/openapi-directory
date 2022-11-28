from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCriticReviewsPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCriticReviewsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetCriticReviewsRequest:
    path_params: GetCriticReviewsPathParams = field()
    security: GetCriticReviewsSecurity = field()
    

@dataclass
class GetCriticReviewsResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dto_query_result: Optional[shared.BaseItemDtoQueryResult] = field(default=None)
    

from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPromotionsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPromotionsJSONRequest:
    query_params: GetPromotionsJSONQueryParams = field(default=None)
    

@dataclass
class GetPromotionsJSONResponse:
    content_type: str = field(default=None)
    promotions: Optional[List[shared.Promotion]] = field(default=None)
    status_code: int = field(default=None)
    

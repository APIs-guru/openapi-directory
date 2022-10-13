from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPromotionsIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPromotionsIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPromotionsIDJSONRequest:
    path_params: GetPromotionsIDJSONPathParams = field(default=None)
    query_params: GetPromotionsIDJSONQueryParams = field(default=None)
    

@dataclass
class GetPromotionsIDJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    promotion: Optional[shared.Promotion] = field(default=None)
    status_code: int = field(default=None)
    

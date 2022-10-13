from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetProductsCategoryCategoryIDJSONPathParams:
    category_id: int = field(default=None, metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsCategoryCategoryIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsCategoryCategoryIDJSONRequest:
    path_params: GetProductsCategoryCategoryIDJSONPathParams = field(default=None)
    query_params: GetProductsCategoryCategoryIDJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsCategoryCategoryIDJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    products: Optional[List[shared.Product]] = field(default=None)
    status_code: int = field(default=None)
    

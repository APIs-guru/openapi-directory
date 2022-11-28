from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProductsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsJSONRequest:
    query_params: GetProductsJSONQueryParams = field()
    

@dataclass
class GetProductsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    products: Optional[List[shared.Product]] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetProductsIDVariantsCountJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDVariantsCountJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDVariantsCountJSONRequest:
    path_params: GetProductsIDVariantsCountJSONPathParams = field()
    query_params: GetProductsIDVariantsCountJSONQueryParams = field()
    

@dataclass
class GetProductsIDVariantsCountJSONResponse:
    content_type: str = field()
    status_code: int = field()
    count: Optional[Any] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    

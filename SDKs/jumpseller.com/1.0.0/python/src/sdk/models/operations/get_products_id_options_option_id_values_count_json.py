from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetProductsIDOptionsOptionIDValuesCountJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    option_id: int = field(default=None, metadata={'path_param': { 'field_name': 'option_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDOptionsOptionIDValuesCountJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDOptionsOptionIDValuesCountJSONRequest:
    path_params: GetProductsIDOptionsOptionIDValuesCountJSONPathParams = field(default=None)
    query_params: GetProductsIDOptionsOptionIDValuesCountJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsIDOptionsOptionIDValuesCountJSONResponse:
    content_type: str = field(default=None)
    count: Optional[Any] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetProductsIDOptionsOptionIDValuesCountJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    option_id: int = field(metadata={'path_param': { 'field_name': 'option_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDOptionsOptionIDValuesCountJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDOptionsOptionIDValuesCountJSONRequest:
    path_params: GetProductsIDOptionsOptionIDValuesCountJSONPathParams = field()
    query_params: GetProductsIDOptionsOptionIDValuesCountJSONQueryParams = field()
    

@dataclass
class GetProductsIDOptionsOptionIDValuesCountJSONResponse:
    content_type: str = field()
    status_code: int = field()
    count: Optional[Any] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    

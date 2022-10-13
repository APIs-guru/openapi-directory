from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetProductsIDImagesCountJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDImagesCountJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDImagesCountJSONRequest:
    path_params: GetProductsIDImagesCountJSONPathParams = field(default=None)
    query_params: GetProductsIDImagesCountJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsIDImagesCountJSONResponse:
    content_type: str = field(default=None)
    count: Optional[Any] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

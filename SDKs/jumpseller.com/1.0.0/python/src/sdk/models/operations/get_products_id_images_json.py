from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetProductsIDImagesJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDImagesJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDImagesJSONRequest:
    path_params: GetProductsIDImagesJSONPathParams = field(default=None)
    query_params: GetProductsIDImagesJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsIDImagesJSONResponse:
    content_type: str = field(default=None)
    images: Optional[List[shared.Image]] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetProductsIDImagesJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDImagesJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDImagesJSONRequest:
    path_params: GetProductsIDImagesJSONPathParams = field()
    query_params: GetProductsIDImagesJSONQueryParams = field()
    

@dataclass
class GetProductsIDImagesJSONResponse:
    content_type: str = field()
    status_code: int = field()
    images: Optional[List[shared.Image]] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    

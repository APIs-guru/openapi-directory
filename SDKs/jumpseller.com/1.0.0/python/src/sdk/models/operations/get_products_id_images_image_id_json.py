from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetProductsIDImagesImageIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    image_id: int = field(metadata={'path_param': { 'field_name': 'image_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDImagesImageIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDImagesImageIDJSONRequest:
    path_params: GetProductsIDImagesImageIDJSONPathParams = field()
    query_params: GetProductsIDImagesImageIDJSONQueryParams = field()
    

@dataclass
class GetProductsIDImagesImageIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    image: Optional[shared.Image] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    

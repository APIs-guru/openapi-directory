from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetProductsIDImagesImageIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    image_id: int = field(default=None, metadata={'path_param': { 'field_name': 'image_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsIDImagesImageIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProductsIDImagesImageIDJSONRequest:
    path_params: GetProductsIDImagesImageIDJSONPathParams = field(default=None)
    query_params: GetProductsIDImagesImageIDJSONQueryParams = field(default=None)
    

@dataclass
class GetProductsIDImagesImageIDJSONResponse:
    content_type: str = field(default=None)
    image: Optional[shared.Image] = field(default=None)
    not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

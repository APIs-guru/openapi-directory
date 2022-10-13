from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostProductsIDImagesJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostProductsIDImagesJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostProductsIDImagesJSONRequest:
    path_params: PostProductsIDImagesJSONPathParams = field(default=None)
    query_params: PostProductsIDImagesJSONQueryParams = field(default=None)
    request: shared.ImageEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProductsIDImagesJSONResponse:
    content_type: str = field(default=None)
    image: Optional[shared.Image] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostProductsIDImagesJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostProductsIDImagesJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostProductsIDImagesJSONRequest:
    path_params: PostProductsIDImagesJSONPathParams = field()
    query_params: PostProductsIDImagesJSONQueryParams = field()
    request: shared.ImageEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProductsIDImagesJSONResponse:
    content_type: str = field()
    status_code: int = field()
    image: Optional[shared.Image] = field(default=None)
    

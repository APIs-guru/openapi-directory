from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostProductsIDVariantsJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostProductsIDVariantsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostProductsIDVariantsJSONRequest:
    path_params: PostProductsIDVariantsJSONPathParams = field()
    query_params: PostProductsIDVariantsJSONQueryParams = field()
    request: shared.VariantEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProductsIDVariantsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    variant: Optional[shared.Variant] = field(default=None)
    

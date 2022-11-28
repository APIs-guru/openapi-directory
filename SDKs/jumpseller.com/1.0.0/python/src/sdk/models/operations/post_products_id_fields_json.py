from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostProductsIDFieldsJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostProductsIDFieldsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostProductsIDFieldsJSONRequest:
    path_params: PostProductsIDFieldsJSONPathParams = field()
    query_params: PostProductsIDFieldsJSONQueryParams = field()
    request: shared.AddProductCustomField = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProductsIDFieldsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    product: Optional[shared.Product] = field(default=None)
    

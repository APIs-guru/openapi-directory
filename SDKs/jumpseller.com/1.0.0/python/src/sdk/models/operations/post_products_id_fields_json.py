from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostProductsIDFieldsJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostProductsIDFieldsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostProductsIDFieldsJSONRequest:
    path_params: PostProductsIDFieldsJSONPathParams = field(default=None)
    query_params: PostProductsIDFieldsJSONQueryParams = field(default=None)
    request: shared.AddProductCustomField = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostProductsIDFieldsJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    product: Optional[shared.Product] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutShippingMethodsIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutShippingMethodsIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutShippingMethodsIDJSONRequest:
    path_params: PutShippingMethodsIDJSONPathParams = field(default=None)
    query_params: PutShippingMethodsIDJSONQueryParams = field(default=None)
    request: shared.ShippingMethodEdit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutShippingMethodsIDJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    shipping_method: Optional[shared.ShippingMethod] = field(default=None)
    status_code: int = field(default=None)
    

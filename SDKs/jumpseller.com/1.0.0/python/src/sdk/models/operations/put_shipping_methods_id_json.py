from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutShippingMethodsIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutShippingMethodsIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PutShippingMethodsIDJSONRequest:
    path_params: PutShippingMethodsIDJSONPathParams = field()
    query_params: PutShippingMethodsIDJSONQueryParams = field()
    request: shared.ShippingMethodEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutShippingMethodsIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    shipping_method: Optional[shared.ShippingMethod] = field(default=None)
    

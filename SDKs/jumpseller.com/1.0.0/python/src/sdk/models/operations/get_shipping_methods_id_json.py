from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetShippingMethodsIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShippingMethodsIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetShippingMethodsIDJSONRequest:
    path_params: GetShippingMethodsIDJSONPathParams = field(default=None)
    query_params: GetShippingMethodsIDJSONQueryParams = field(default=None)
    

@dataclass
class GetShippingMethodsIDJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    shipping_method: Optional[shared.ShippingMethod] = field(default=None)
    status_code: int = field(default=None)
    

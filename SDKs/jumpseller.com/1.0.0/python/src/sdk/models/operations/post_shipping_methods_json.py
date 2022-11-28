from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostShippingMethodsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class PostShippingMethodsJSONRequest:
    query_params: PostShippingMethodsJSONQueryParams = field()
    request: shared.ShippingMethodEdit = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostShippingMethodsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    shipping_method: Optional[shared.ShippingMethod] = field(default=None)
    

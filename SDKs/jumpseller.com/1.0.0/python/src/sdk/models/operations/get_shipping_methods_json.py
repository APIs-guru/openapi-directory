from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetShippingMethodsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetShippingMethodsJSONRequest:
    query_params: GetShippingMethodsJSONQueryParams = field(default=None)
    

@dataclass
class GetShippingMethodsJSONResponse:
    content_type: str = field(default=None)
    shipping_methods: Optional[List[shared.ShippingMethod]] = field(default=None)
    status_code: int = field(default=None)
    

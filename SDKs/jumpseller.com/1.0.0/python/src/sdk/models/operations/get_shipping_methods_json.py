from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetShippingMethodsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetShippingMethodsJSONRequest:
    query_params: GetShippingMethodsJSONQueryParams = field()
    

@dataclass
class GetShippingMethodsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    shipping_methods: Optional[List[shared.ShippingMethod]] = field(default=None)
    

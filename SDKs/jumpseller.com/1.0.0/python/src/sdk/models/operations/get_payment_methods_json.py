from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPaymentMethodsJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPaymentMethodsJSONRequest:
    query_params: GetPaymentMethodsJSONQueryParams = field(default=None)
    

@dataclass
class GetPaymentMethodsJSONResponse:
    content_type: str = field(default=None)
    payment_methods: Optional[List[shared.PaymentMethod]] = field(default=None)
    status_code: int = field(default=None)
    

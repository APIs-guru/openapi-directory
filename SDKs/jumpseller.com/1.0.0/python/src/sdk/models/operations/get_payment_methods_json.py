from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPaymentMethodsJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPaymentMethodsJSONRequest:
    query_params: GetPaymentMethodsJSONQueryParams = field()
    

@dataclass
class GetPaymentMethodsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    payment_methods: Optional[List[shared.PaymentMethod]] = field(default=None)
    

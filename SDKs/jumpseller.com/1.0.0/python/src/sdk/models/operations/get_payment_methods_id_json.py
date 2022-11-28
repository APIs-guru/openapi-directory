from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPaymentMethodsIDJSONPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentMethodsIDJSONQueryParams:
    authtoken: str = field(metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPaymentMethodsIDJSONRequest:
    path_params: GetPaymentMethodsIDJSONPathParams = field()
    query_params: GetPaymentMethodsIDJSONQueryParams = field()
    

@dataclass
class GetPaymentMethodsIDJSONResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[Any] = field(default=None)
    payment_method: Optional[shared.PaymentMethod] = field(default=None)
    

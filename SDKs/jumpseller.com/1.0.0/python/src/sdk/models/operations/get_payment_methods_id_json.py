from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPaymentMethodsIDJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentMethodsIDJSONQueryParams:
    authtoken: str = field(default=None, metadata={'query_param': { 'field_name': 'authtoken', 'style': 'form', 'explode': True }})
    login: str = field(default=None, metadata={'query_param': { 'field_name': 'login', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPaymentMethodsIDJSONRequest:
    path_params: GetPaymentMethodsIDJSONPathParams = field(default=None)
    query_params: GetPaymentMethodsIDJSONQueryParams = field(default=None)
    

@dataclass
class GetPaymentMethodsIDJSONResponse:
    content_type: str = field(default=None)
    not_found: Optional[Any] = field(default=None)
    payment_method: Optional[shared.PaymentMethod] = field(default=None)
    status_code: int = field(default=None)
    

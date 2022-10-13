from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPaymentMethodPathParams:
    payment_method_number: str = field(default=None, metadata={'path_param': { 'field_name': 'paymentMethodNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentMethodSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPaymentMethodRequest:
    path_params: GetPaymentMethodPathParams = field(default=None)
    security: GetPaymentMethodSecurity = field(default=None)
    

@dataclass
class GetPaymentMethodResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    

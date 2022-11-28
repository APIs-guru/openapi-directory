from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetPaymentMethodPathParams:
    payment_method_number: str = field(metadata={'path_param': { 'field_name': 'paymentMethodNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentMethodSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPaymentMethodRequest:
    path_params: GetPaymentMethodPathParams = field()
    security: GetPaymentMethodSecurity = field()
    

@dataclass
class GetPaymentMethodResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    

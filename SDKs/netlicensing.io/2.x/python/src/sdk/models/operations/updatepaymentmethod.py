from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UpdatePaymentMethodPathParams:
    payment_method_number: str = field(default=None, metadata={'path_param': { 'field_name': 'paymentMethodNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePaymentMethodRequestBody:
    active: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'active' }})
    paypal_subject: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'paypal.subject' }})
    

@dataclass
class UpdatePaymentMethodSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdatePaymentMethodRequest:
    path_params: UpdatePaymentMethodPathParams = field(default=None)
    request: Optional[UpdatePaymentMethodRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdatePaymentMethodSecurity = field(default=None)
    

@dataclass
class UpdatePaymentMethodResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    

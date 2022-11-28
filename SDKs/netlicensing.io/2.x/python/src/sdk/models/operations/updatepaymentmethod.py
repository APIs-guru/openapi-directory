from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdatePaymentMethodPathParams:
    payment_method_number: str = field(metadata={'path_param': { 'field_name': 'paymentMethodNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePaymentMethodRequestBody:
    active: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'active' }})
    paypal_subject: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'paypal.subject' }})
    

@dataclass
class UpdatePaymentMethodSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdatePaymentMethodRequest:
    path_params: UpdatePaymentMethodPathParams = field()
    security: UpdatePaymentMethodSecurity = field()
    request: Optional[UpdatePaymentMethodRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclass
class UpdatePaymentMethodResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    

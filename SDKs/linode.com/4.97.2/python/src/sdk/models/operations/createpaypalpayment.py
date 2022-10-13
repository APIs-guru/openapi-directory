from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreatePayPalPaymentSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreatePayPalPaymentSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePayPalPaymentSecurity:
    option1: Optional[CreatePayPalPaymentSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreatePayPalPaymentSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreatePayPalPaymentRequest:
    request: shared.PayPal = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePayPalPaymentSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreatePayPalPayment200ApplicationJSON:
    checkout_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkout_token' }})
    payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_id' }})
    

@dataclass_json
@dataclass
class CreatePayPalPaymentDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreatePayPalPaymentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_pay_pal_payment_200_application_json_object: Optional[CreatePayPalPayment200ApplicationJSON] = field(default=None)
    create_pay_pal_payment_default_application_json_object: Optional[CreatePayPalPaymentDefaultApplicationJSON] = field(default=None)
    

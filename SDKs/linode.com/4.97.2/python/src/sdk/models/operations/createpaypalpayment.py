from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreatePayPalPaymentSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreatePayPalPayment200ApplicationJSON:
    checkout_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkout_token') }})
    payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_id') }})
    

@dataclass_json
@dataclass
class CreatePayPalPaymentDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreatePayPalPaymentRequest:
    request: shared.PayPal = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePayPalPaymentSecurity = field()
    

@dataclass
class CreatePayPalPaymentResponse:
    content_type: str = field()
    status_code: int = field()
    create_pay_pal_payment_200_application_json_object: Optional[CreatePayPalPayment200ApplicationJSON] = field(default=None)
    create_pay_pal_payment_default_application_json_object: Optional[CreatePayPalPaymentDefaultApplicationJSON] = field(default=None)
    

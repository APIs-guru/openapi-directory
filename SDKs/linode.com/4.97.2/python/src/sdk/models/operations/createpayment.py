from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreatePaymentSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreatePaymentDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreatePaymentRequest:
    request: shared.PaymentRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePaymentSecurity = field()
    

@dataclass
class CreatePaymentResponse:
    content_type: str = field()
    status_code: int = field()
    payment: Optional[shared.Payment] = field(default=None)
    create_payment_default_application_json_object: Optional[CreatePaymentDefaultApplicationJSON] = field(default=None)
    

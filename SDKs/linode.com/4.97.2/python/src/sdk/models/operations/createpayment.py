from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreatePaymentSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreatePaymentSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePaymentSecurity:
    option1: Optional[CreatePaymentSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreatePaymentSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreatePaymentRequest:
    request: shared.PaymentRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePaymentSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreatePaymentDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreatePaymentResponse:
    content_type: str = field(default=None)
    payment: Optional[shared.Payment] = field(default=None)
    status_code: int = field(default=None)
    create_payment_default_application_json_object: Optional[CreatePaymentDefaultApplicationJSON] = field(default=None)
    

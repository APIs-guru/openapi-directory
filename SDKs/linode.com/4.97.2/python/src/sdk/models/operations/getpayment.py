from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetPaymentPathParams:
    payment_id: int = field(default=None, metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetPaymentSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentSecurity:
    option1: Optional[GetPaymentSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetPaymentSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetPaymentRequest:
    path_params: GetPaymentPathParams = field(default=None)
    security: GetPaymentSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetPaymentDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetPaymentResponse:
    content_type: str = field(default=None)
    payment: Optional[shared.Payment] = field(default=None)
    status_code: int = field(default=None)
    get_payment_default_application_json_object: Optional[GetPaymentDefaultApplicationJSON] = field(default=None)
    

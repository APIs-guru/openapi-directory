from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetPaymentPathParams:
    payment_id: int = field(metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPaymentSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetPaymentDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetPaymentRequest:
    path_params: GetPaymentPathParams = field()
    security: GetPaymentSecurity = field()
    

@dataclass
class GetPaymentResponse:
    content_type: str = field()
    status_code: int = field()
    payment: Optional[shared.Payment] = field(default=None)
    get_payment_default_application_json_object: Optional[GetPaymentDefaultApplicationJSON] = field(default=None)
    

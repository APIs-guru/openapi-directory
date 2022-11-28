from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ExecutePayPalPaymentSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class ExecutePayPalPaymentDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class ExecutePayPalPaymentRequest:
    request: shared.PayPalExecute = field(metadata={'request': { 'media_type': 'application/json' }})
    security: ExecutePayPalPaymentSecurity = field()
    

@dataclass
class ExecutePayPalPaymentResponse:
    content_type: str = field()
    status_code: int = field()
    execute_pay_pal_payment_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    execute_pay_pal_payment_default_application_json_object: Optional[ExecutePayPalPaymentDefaultApplicationJSON] = field(default=None)
    

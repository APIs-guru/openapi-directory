from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ExecutePayPalPaymentSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExecutePayPalPaymentSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ExecutePayPalPaymentSecurity:
    option1: Optional[ExecutePayPalPaymentSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[ExecutePayPalPaymentSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class ExecutePayPalPaymentRequest:
    request: shared.PayPalExecute = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ExecutePayPalPaymentSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ExecutePayPalPaymentDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class ExecutePayPalPaymentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    execute_pay_pal_payment_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    execute_pay_pal_payment_default_application_json_object: Optional[ExecutePayPalPaymentDefaultApplicationJSON] = field(default=None)
    

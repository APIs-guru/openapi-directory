from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
CREATE_PAYMENT_METHOD_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass_json
@dataclass
class CreatePaymentMethodRequestBodyData:
    card_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_number' }})
    cvv: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cvv' }})
    expiry_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry_month' }})
    expiry_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry_year' }})
    

@dataclass_json
@dataclass
class CreatePaymentMethodRequestBody:
    data: CreatePaymentMethodRequestBodyData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    is_default: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_default' }})
    type: shared.TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreatePaymentMethodSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreatePaymentMethodSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreatePaymentMethodSecurity:
    option1: Optional[CreatePaymentMethodSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[CreatePaymentMethodSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class CreatePaymentMethodRequest:
    server_url: Optional[str] = field(default=None)
    request: CreatePaymentMethodRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePaymentMethodSecurity = field(default=None)
    

@dataclass_json
@dataclass
class CreatePaymentMethodDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class CreatePaymentMethodResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_payment_method_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    create_payment_method_default_application_json_object: Optional[CreatePaymentMethodDefaultApplicationJSON] = field(default=None)
    

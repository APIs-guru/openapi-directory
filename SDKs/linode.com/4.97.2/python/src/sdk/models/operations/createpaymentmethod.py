from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


CREATE_PAYMENT_METHOD_SERVERS = [
	"https://api.linode.com/v4",
]


@dataclass_json
@dataclass
class CreatePaymentMethodRequestBodyData:
    card_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_number') }})
    cvv: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cvv') }})
    expiry_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry_month') }})
    expiry_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry_year') }})
    

@dataclass_json
@dataclass
class CreatePaymentMethodRequestBody:
    r"""CreatePaymentMethodRequestBody
    Payment Method Request Object.
    """
    
    data: CreatePaymentMethodRequestBodyData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    is_default: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_default') }})
    type: shared.TypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class CreatePaymentMethodSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class CreatePaymentMethodDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class CreatePaymentMethodRequest:
    request: CreatePaymentMethodRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreatePaymentMethodSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreatePaymentMethodResponse:
    content_type: str = field()
    status_code: int = field()
    create_payment_method_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    create_payment_method_default_application_json_object: Optional[CreatePaymentMethodDefaultApplicationJSON] = field(default=None)
    

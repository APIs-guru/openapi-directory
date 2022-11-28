from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


GET_PAYMENT_METHODS_SERVERS = [
	"https://api.linode.com/v4",
	"https://api.linode.com/v4beta",
]


@dataclass
class GetPaymentMethodsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPaymentMethodsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetPaymentMethods200ApplicationJSON:
    data: Optional[List[shared.PaymentMethod]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class GetPaymentMethodsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetPaymentMethodsRequest:
    query_params: GetPaymentMethodsQueryParams = field()
    security: GetPaymentMethodsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetPaymentMethodsResponse:
    content_type: str = field()
    status_code: int = field()
    get_payment_methods_200_application_json_object: Optional[GetPaymentMethods200ApplicationJSON] = field(default=None)
    get_payment_methods_default_application_json_object: Optional[GetPaymentMethodsDefaultApplicationJSON] = field(default=None)
    

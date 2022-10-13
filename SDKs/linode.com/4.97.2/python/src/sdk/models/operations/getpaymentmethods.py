from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
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
class GetPaymentMethodsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetPaymentMethodsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentMethodsSecurity:
    option1: Optional[GetPaymentMethodsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetPaymentMethodsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetPaymentMethodsRequest:
    server_url: Optional[str] = field(default=None)
    query_params: GetPaymentMethodsQueryParams = field(default=None)
    security: GetPaymentMethodsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetPaymentMethods200ApplicationJSON:
    data: Optional[List[shared.PaymentMethod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetPaymentMethodsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetPaymentMethodsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_payment_methods_200_application_json_object: Optional[GetPaymentMethods200ApplicationJSON] = field(default=None)
    get_payment_methods_default_application_json_object: Optional[GetPaymentMethodsDefaultApplicationJSON] = field(default=None)
    

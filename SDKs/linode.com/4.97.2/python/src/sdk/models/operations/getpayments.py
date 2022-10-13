from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetPaymentsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPaymentsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetPaymentsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentsSecurity:
    option1: Optional[GetPaymentsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetPaymentsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetPaymentsRequest:
    query_params: GetPaymentsQueryParams = field(default=None)
    security: GetPaymentsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetPayments200ApplicationJSON:
    data: Optional[List[shared.Payment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetPaymentsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetPaymentsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_payments_200_application_json_object: Optional[GetPayments200ApplicationJSON] = field(default=None)
    get_payments_default_application_json_object: Optional[GetPaymentsDefaultApplicationJSON] = field(default=None)
    

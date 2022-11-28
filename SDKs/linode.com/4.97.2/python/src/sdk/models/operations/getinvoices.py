from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetInvoicesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInvoicesSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetInvoices200ApplicationJSON:
    data: Optional[List[shared.Invoice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class GetInvoicesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetInvoicesRequest:
    query_params: GetInvoicesQueryParams = field()
    security: GetInvoicesSecurity = field()
    

@dataclass
class GetInvoicesResponse:
    content_type: str = field()
    status_code: int = field()
    get_invoices_200_application_json_object: Optional[GetInvoices200ApplicationJSON] = field(default=None)
    get_invoices_default_application_json_object: Optional[GetInvoicesDefaultApplicationJSON] = field(default=None)
    

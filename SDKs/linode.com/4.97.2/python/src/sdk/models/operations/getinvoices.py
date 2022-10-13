from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetInvoicesQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInvoicesSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetInvoicesSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetInvoicesSecurity:
    option1: Optional[GetInvoicesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetInvoicesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetInvoicesRequest:
    query_params: GetInvoicesQueryParams = field(default=None)
    security: GetInvoicesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetInvoices200ApplicationJSON:
    data: Optional[List[shared.Invoice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetInvoicesDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetInvoicesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_invoices_200_application_json_object: Optional[GetInvoices200ApplicationJSON] = field(default=None)
    get_invoices_default_application_json_object: Optional[GetInvoicesDefaultApplicationJSON] = field(default=None)
    

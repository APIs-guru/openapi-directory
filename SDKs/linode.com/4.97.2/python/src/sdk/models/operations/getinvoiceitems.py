from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetInvoiceItemsPathParams:
    invoice_id: int = field(default=None, metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvoiceItemsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInvoiceItemsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetInvoiceItemsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetInvoiceItemsSecurity:
    option1: Optional[GetInvoiceItemsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetInvoiceItemsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetInvoiceItemsRequest:
    path_params: GetInvoiceItemsPathParams = field(default=None)
    query_params: GetInvoiceItemsQueryParams = field(default=None)
    security: GetInvoiceItemsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetInvoiceItems200ApplicationJSON:
    data: Optional[List[shared.InvoiceItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetInvoiceItemsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetInvoiceItemsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_invoice_items_200_application_json_object: Optional[GetInvoiceItems200ApplicationJSON] = field(default=None)
    get_invoice_items_default_application_json_object: Optional[GetInvoiceItemsDefaultApplicationJSON] = field(default=None)
    

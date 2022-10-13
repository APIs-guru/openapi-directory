from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetInvoicePathParams:
    invoice_id: int = field(default=None, metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvoiceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetInvoiceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetInvoiceSecurity:
    option1: Optional[GetInvoiceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetInvoiceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetInvoiceRequest:
    path_params: GetInvoicePathParams = field(default=None)
    security: GetInvoiceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetInvoiceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetInvoiceResponse:
    content_type: str = field(default=None)
    invoice: Optional[shared.Invoice] = field(default=None)
    status_code: int = field(default=None)
    get_invoice_default_application_json_object: Optional[GetInvoiceDefaultApplicationJSON] = field(default=None)
    

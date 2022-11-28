from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetInvoicePathParams:
    invoice_id: int = field(metadata={'path_param': { 'field_name': 'invoiceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvoiceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetInvoiceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetInvoiceRequest:
    path_params: GetInvoicePathParams = field()
    security: GetInvoiceSecurity = field()
    

@dataclass
class GetInvoiceResponse:
    content_type: str = field()
    status_code: int = field()
    invoice: Optional[shared.Invoice] = field(default=None)
    get_invoice_default_application_json_object: Optional[GetInvoiceDefaultApplicationJSON] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class LandlordControllerGetInvoicePathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetInvoiceQueryParams:
    invoice_id: str = field(metadata={'query_param': { 'field_name': 'invoiceID', 'style': 'form', 'explode': True }})
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetInvoiceRequest:
    path_params: LandlordControllerGetInvoicePathParams = field()
    query_params: LandlordControllerGetInvoiceQueryParams = field()
    

@dataclass
class LandlordControllerGetInvoiceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    

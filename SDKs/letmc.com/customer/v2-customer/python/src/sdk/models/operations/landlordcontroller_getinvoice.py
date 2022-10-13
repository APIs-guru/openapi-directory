from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class LandlordControllerGetInvoicePathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class LandlordControllerGetInvoiceQueryParams:
    invoice_id: str = field(default=None, metadata={'query_param': { 'field_name': 'invoiceID', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class LandlordControllerGetInvoiceRequest:
    path_params: LandlordControllerGetInvoicePathParams = field(default=None)
    query_params: LandlordControllerGetInvoiceQueryParams = field(default=None)
    

@dataclass
class LandlordControllerGetInvoiceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    

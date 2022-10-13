from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInvoicePathParams:
    invoice_id: str = field(default=None, metadata={'path_param': { 'field_name': 'invoice_id', 'style': 'simple', 'explode': False }})
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvoiceRequest:
    path_params: GetInvoicePathParams = field(default=None)
    

@dataclass
class GetInvoiceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    invoice_expand_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

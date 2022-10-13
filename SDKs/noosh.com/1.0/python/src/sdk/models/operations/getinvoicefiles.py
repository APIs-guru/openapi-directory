from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInvoiceFilesPathParams:
    invoice_id: str = field(default=None, metadata={'path_param': { 'field_name': 'invoice_id', 'style': 'simple', 'explode': False }})
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvoiceFilesRequest:
    path_params: GetInvoiceFilesPathParams = field(default=None)
    

@dataclass
class GetInvoiceFilesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    file_list_response_vo: Optional[Any] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInvoiceFilesPathParams:
    invoice_id: str = field(metadata={'path_param': { 'field_name': 'invoice_id', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvoiceFilesRequest:
    path_params: GetInvoiceFilesPathParams = field()
    

@dataclass
class GetInvoiceFilesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    file_list_response_vo: Optional[Any] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    

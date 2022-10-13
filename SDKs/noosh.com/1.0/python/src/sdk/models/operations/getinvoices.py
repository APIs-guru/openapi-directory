from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInvoicesPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvoicesRequest:
    path_params: GetInvoicesPathParams = field(default=None)
    

@dataclass
class GetInvoicesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    invoice_detail_list_expand_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRfqListPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRfqListRequest:
    path_params: GetRfqListPathParams = field()
    

@dataclass
class GetRfqListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    rfq_list_vo: Optional[Any] = field(default=None)
    

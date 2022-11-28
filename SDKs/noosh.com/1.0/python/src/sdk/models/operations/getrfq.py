from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRfqPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    rfq_id: str = field(metadata={'path_param': { 'field_name': 'rfq_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRfqRequest:
    path_params: GetRfqPathParams = field()
    

@dataclass
class GetRfqResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    rfq_expand_vo: Optional[Any] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRfqPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    rfq_id: str = field(default=None, metadata={'path_param': { 'field_name': 'rfq_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRfqRequest:
    path_params: GetRfqPathParams = field(default=None)
    

@dataclass
class GetRfqResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    rfq_expand_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

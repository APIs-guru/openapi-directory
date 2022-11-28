from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetEstimatePathParams:
    estimate_id: str = field(metadata={'path_param': { 'field_name': 'estimate_id', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEstimateRequest:
    path_params: GetEstimatePathParams = field()
    

@dataclass
class GetEstimateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    estimate_expand_vo: Optional[Any] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    

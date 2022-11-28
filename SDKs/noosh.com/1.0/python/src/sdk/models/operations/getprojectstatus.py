from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetProjectStatusPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectStatusRequest:
    path_params: GetProjectStatusPathParams = field()
    

@dataclass
class GetProjectStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    project_status_list_vo: Optional[Any] = field(default=None)
    

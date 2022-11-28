from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSpecListPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpecListRequest:
    path_params: GetSpecListPathParams = field()
    

@dataclass
class GetSpecListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    spec_list_vo: Optional[Any] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetSpecListPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpecListRequest:
    path_params: GetSpecListPathParams = field(default=None)
    

@dataclass
class GetSpecListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    spec_list_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTaskOfProjectPathParams:
    project_id: str = field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    task_id: str = field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaskOfProjectRequest:
    path_params: GetTaskOfProjectPathParams = field()
    

@dataclass
class GetTaskOfProjectResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    task_expand_vo: Optional[Any] = field(default=None)
    

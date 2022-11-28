from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class TaskPriorityListPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TaskPriorityListRequest:
    path_params: TaskPriorityListPathParams = field()
    

@dataclass
class TaskPriorityListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    task_priority_list_vo: Optional[Any] = field(default=None)
    

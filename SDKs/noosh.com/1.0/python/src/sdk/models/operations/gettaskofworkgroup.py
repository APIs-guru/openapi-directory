from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTaskOfWorkgroupPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaskOfWorkgroupRequest:
    path_params: GetTaskOfWorkgroupPathParams = field()
    

@dataclass
class GetTaskOfWorkgroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    task_expand_workgroup_level_vo: Optional[Any] = field(default=None)
    

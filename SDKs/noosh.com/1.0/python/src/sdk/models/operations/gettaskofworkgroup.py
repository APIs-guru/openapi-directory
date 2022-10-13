from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTaskOfWorkgroupPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaskOfWorkgroupRequest:
    path_params: GetTaskOfWorkgroupPathParams = field(default=None)
    

@dataclass
class GetTaskOfWorkgroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    task_expand_workgroup_level_vo: Optional[Any] = field(default=None)
    

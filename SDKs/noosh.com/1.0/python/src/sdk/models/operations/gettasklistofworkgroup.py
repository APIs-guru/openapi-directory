from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTaskListOfWorkgroupPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaskListOfWorkgroupRequest:
    path_params: GetTaskListOfWorkgroupPathParams = field()
    

@dataclass
class GetTaskListOfWorkgroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    task_workgroup_level_list_vo: Optional[Any] = field(default=None)
    

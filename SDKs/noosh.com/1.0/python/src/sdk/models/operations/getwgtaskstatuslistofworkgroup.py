from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetWgTaskStatusListOfWorkgroupPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWgTaskStatusListOfWorkgroupRequest:
    path_params: GetWgTaskStatusListOfWorkgroupPathParams = field()
    

@dataclass
class GetWgTaskStatusListOfWorkgroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    wg_task_status_list_vo: Optional[Any] = field(default=None)
    

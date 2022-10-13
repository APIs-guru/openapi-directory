from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTaskTypesOfWorkgroupPathParams:
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaskTypesOfWorkgroupRequest:
    path_params: GetTaskTypesOfWorkgroupPathParams = field(default=None)
    

@dataclass
class GetTaskTypesOfWorkgroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    task_type_list_vo: Optional[Any] = field(default=None)
    

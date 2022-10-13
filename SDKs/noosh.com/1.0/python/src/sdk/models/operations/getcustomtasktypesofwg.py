from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetCustomTaskTypesOfWgPathParams:
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomTaskTypesOfWgRequest:
    path_params: GetCustomTaskTypesOfWgPathParams = field(default=None)
    

@dataclass
class GetCustomTaskTypesOfWgResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    task_type_list_vo: Optional[Any] = field(default=None)
    

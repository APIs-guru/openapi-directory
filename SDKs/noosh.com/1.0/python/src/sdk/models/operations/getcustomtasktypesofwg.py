from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetCustomTaskTypesOfWgPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomTaskTypesOfWgRequest:
    path_params: GetCustomTaskTypesOfWgPathParams = field()
    

@dataclass
class GetCustomTaskTypesOfWgResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    task_type_list_vo: Optional[Any] = field(default=None)
    

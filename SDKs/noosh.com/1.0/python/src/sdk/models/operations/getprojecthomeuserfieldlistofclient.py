from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetProjectHomeUserFieldListOfClientPathParams:
    client_workgroup_id: str = field(metadata={'path_param': { 'field_name': 'client_workgroup_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectHomeUserFieldListOfClientRequest:
    path_params: GetProjectHomeUserFieldListOfClientPathParams = field()
    

@dataclass
class GetProjectHomeUserFieldListOfClientResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    project_home_user_fields_list_vo: Optional[Any] = field(default=None)
    

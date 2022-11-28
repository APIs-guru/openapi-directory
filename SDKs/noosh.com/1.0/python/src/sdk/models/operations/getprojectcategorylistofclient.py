from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetProjectCategoryListOfClientPathParams:
    client_workgroup_id: str = field(metadata={'path_param': { 'field_name': 'client_workgroup_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectCategoryListOfClientRequest:
    path_params: GetProjectCategoryListOfClientPathParams = field()
    

@dataclass
class GetProjectCategoryListOfClientResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    project_category_list_vo: Optional[Any] = field(default=None)
    

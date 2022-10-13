from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetProjectCategoryListOfClientPathParams:
    client_workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'client_workgroup_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectCategoryListOfClientRequest:
    path_params: GetProjectCategoryListOfClientPathParams = field(default=None)
    

@dataclass
class GetProjectCategoryListOfClientResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    project_category_list_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

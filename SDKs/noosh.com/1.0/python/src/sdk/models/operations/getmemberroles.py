from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetMemberRolesPathParams:
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMemberRolesRequest:
    path_params: GetMemberRolesPathParams = field(default=None)
    

@dataclass
class GetMemberRolesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    role_list_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetWorkgroupMemberListPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkgroupMemberListRequest:
    path_params: GetWorkgroupMemberListPathParams = field()
    

@dataclass
class GetWorkgroupMemberListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    workgroup_members_list_vo: Optional[Any] = field(default=None)
    

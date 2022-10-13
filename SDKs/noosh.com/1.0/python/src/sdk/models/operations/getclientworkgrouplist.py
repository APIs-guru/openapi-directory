from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetClientWorkgroupListPathParams:
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetClientWorkgroupListRequest:
    path_params: GetClientWorkgroupListPathParams = field(default=None)
    

@dataclass
class GetClientWorkgroupListResponse:
    body: bytes = field(default=None)
    client_workgroup_list_vo: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

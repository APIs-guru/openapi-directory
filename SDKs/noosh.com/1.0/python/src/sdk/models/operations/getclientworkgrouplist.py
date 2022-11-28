from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetClientWorkgroupListPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetClientWorkgroupListRequest:
    path_params: GetClientWorkgroupListPathParams = field()
    

@dataclass
class GetClientWorkgroupListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    client_workgroup_list_vo: Optional[Any] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    

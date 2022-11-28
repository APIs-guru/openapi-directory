from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSpecificClientWorkgroupPathParams:
    client_workgroup_id: str = field(metadata={'path_param': { 'field_name': 'client_workgroup_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpecificClientWorkgroupRequest:
    path_params: GetSpecificClientWorkgroupPathParams = field()
    

@dataclass
class GetSpecificClientWorkgroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    client_workgroup_expand_vo: Optional[Any] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    

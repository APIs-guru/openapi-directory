from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSpecificClientWorkgroupPathParams:
    client_workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'client_workgroup_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSpecificClientWorkgroupRequest:
    path_params: GetSpecificClientWorkgroupPathParams = field(default=None)
    

@dataclass
class GetSpecificClientWorkgroupResponse:
    body: bytes = field(default=None)
    client_workgroup_expand_vo: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

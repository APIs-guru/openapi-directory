from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetWorkgroupDetailPathParams:
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkgroupDetailRequest:
    path_params: GetWorkgroupDetailPathParams = field(default=None)
    

@dataclass
class GetWorkgroupDetailResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    workgroup_expand_vo: Optional[Any] = field(default=None)
    

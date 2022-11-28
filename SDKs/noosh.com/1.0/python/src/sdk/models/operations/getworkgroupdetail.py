from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetWorkgroupDetailPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkgroupDetailRequest:
    path_params: GetWorkgroupDetailPathParams = field()
    

@dataclass
class GetWorkgroupDetailResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    workgroup_expand_vo: Optional[Any] = field(default=None)
    

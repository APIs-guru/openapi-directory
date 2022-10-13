from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetBuyOrderOfWorkgroupPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBuyOrderOfWorkgroupRequest:
    path_params: GetBuyOrderOfWorkgroupPathParams = field(default=None)
    

@dataclass
class GetBuyOrderOfWorkgroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    order_expand_workgroup_level_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

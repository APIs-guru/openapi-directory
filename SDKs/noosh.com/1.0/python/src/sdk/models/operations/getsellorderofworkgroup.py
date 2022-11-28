from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSellOrderOfWorkgroupPathParams:
    order_id: str = field(metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSellOrderOfWorkgroupRequest:
    path_params: GetSellOrderOfWorkgroupPathParams = field()
    

@dataclass
class GetSellOrderOfWorkgroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    order_expand_workgroup_level_vo: Optional[Any] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetSellOrderListOfWorkgroupPathParams:
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSellOrderListOfWorkgroupRequest:
    path_params: GetSellOrderListOfWorkgroupPathParams = field()
    

@dataclass
class GetSellOrderListOfWorkgroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    order_workgroup_level_list_vo: Optional[Any] = field(default=None)
    

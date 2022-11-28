from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetBuyOrderOfWorkgroupPathParams:
    order_id: str = field(metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBuyOrderOfWorkgroupRequest:
    path_params: GetBuyOrderOfWorkgroupPathParams = field()
    

@dataclass
class GetBuyOrderOfWorkgroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    order_expand_workgroup_level_vo: Optional[Any] = field(default=None)
    

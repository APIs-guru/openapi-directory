from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetBuyOrderPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'order_id', 'style': 'simple', 'explode': False }})
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    workgroup_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workgroup_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBuyOrderRequest:
    path_params: GetBuyOrderPathParams = field(default=None)
    

@dataclass
class GetBuyOrderResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    http_status_vo: Optional[Any] = field(default=None)
    order_detail_vo: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    

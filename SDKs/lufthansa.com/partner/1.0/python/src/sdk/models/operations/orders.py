from dataclasses import dataclass, field
from typing import Optional


@dataclass
class OrdersPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'orderID', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrdersHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrdersSecurity:
    auth: shared.SchemeAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OrdersRequest:
    path_params: OrdersPathParams = field(default=None)
    headers: OrdersHeaders = field(default=None)
    security: OrdersSecurity = field(default=None)
    

@dataclass
class OrdersResponse:
    content_type: str = field(default=None)
    orders_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    

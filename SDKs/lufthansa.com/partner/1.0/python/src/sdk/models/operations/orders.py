from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrdersPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    order_id: str = field(metadata={'path_param': { 'field_name': 'orderID', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrdersHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrdersSecurity:
    auth: shared.SchemeAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class OrdersRequest:
    headers: OrdersHeaders = field()
    path_params: OrdersPathParams = field()
    security: OrdersSecurity = field()
    

@dataclass
class OrdersResponse:
    content_type: str = field()
    status_code: int = field()
    orders_200_application_json_string: Optional[str] = field(default=None)
    

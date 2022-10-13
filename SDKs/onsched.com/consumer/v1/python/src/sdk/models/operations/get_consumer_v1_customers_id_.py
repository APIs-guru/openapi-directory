from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConsumerV1CustomersIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1CustomersIDRequest:
    path_params: GetConsumerV1CustomersIDPathParams = field(default=None)
    

@dataclass
class GetConsumerV1CustomersIDResponse:
    content_type: str = field(default=None)
    customer_view_model: Optional[shared.CustomerViewModel] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConsumerV1CustomersIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1CustomersIDRequest:
    path_params: GetConsumerV1CustomersIDPathParams = field()
    

@dataclass
class GetConsumerV1CustomersIDResponse:
    content_type: str = field()
    status_code: int = field()
    customer_view_model: Optional[shared.CustomerViewModel] = field(default=None)
    

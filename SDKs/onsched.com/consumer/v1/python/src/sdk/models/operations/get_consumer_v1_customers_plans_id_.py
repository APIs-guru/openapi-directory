from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConsumerV1CustomersPlansIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1CustomersPlansIDRequest:
    path_params: GetConsumerV1CustomersPlansIDPathParams = field()
    

@dataclass
class GetConsumerV1CustomersPlansIDResponse:
    content_type: str = field()
    status_code: int = field()
    customer_plan_view_model: Optional[shared.CustomerPlanViewModel] = field(default=None)
    

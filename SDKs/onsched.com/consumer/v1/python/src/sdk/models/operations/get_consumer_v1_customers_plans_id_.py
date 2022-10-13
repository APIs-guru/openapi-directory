from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConsumerV1CustomersPlansIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1CustomersPlansIDRequest:
    path_params: GetConsumerV1CustomersPlansIDPathParams = field(default=None)
    

@dataclass
class GetConsumerV1CustomersPlansIDResponse:
    content_type: str = field(default=None)
    customer_plan_view_model: Optional[shared.CustomerPlanViewModel] = field(default=None)
    status_code: int = field(default=None)
    

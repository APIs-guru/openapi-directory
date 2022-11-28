from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConsumerV1CustomersSubscriptionsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1CustomersSubscriptionsIDRequest:
    path_params: GetConsumerV1CustomersSubscriptionsIDPathParams = field()
    

@dataclass
class GetConsumerV1CustomersSubscriptionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    customer_subscription_view_model: Optional[shared.CustomerSubscriptionViewModel] = field(default=None)
    

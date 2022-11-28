from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConsumerV1CustomersIDSubscriptionsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1CustomersIDSubscriptionsRequest:
    path_params: GetConsumerV1CustomersIDSubscriptionsPathParams = field()
    

@dataclass
class GetConsumerV1CustomersIDSubscriptionsResponse:
    content_type: str = field()
    status_code: int = field()
    customer_subscription_view_model: Optional[shared.CustomerSubscriptionViewModel] = field(default=None)
    

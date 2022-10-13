from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostConsumerV1CustomersIDSubscriptionsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostConsumerV1CustomersIDSubscriptionsRequests:
    customer_subscription_input_model: Optional[shared.CustomerSubscriptionInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    customer_subscription_input_model1: Optional[shared.CustomerSubscriptionInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    customer_subscription_input_model2: Optional[shared.CustomerSubscriptionInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    customer_subscription_input_model3: Optional[shared.CustomerSubscriptionInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostConsumerV1CustomersIDSubscriptionsRequest:
    path_params: PostConsumerV1CustomersIDSubscriptionsPathParams = field(default=None)
    request: Optional[PostConsumerV1CustomersIDSubscriptionsRequests] = field(default=None)
    

@dataclass
class PostConsumerV1CustomersIDSubscriptionsResponse:
    content_type: str = field(default=None)
    customer_subscription_view_model: Optional[shared.CustomerSubscriptionViewModel] = field(default=None)
    status_code: int = field(default=None)
    

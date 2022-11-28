from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PutConsumerV1CustomersSubscriptionsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutConsumerV1CustomersSubscriptionsIDRequests:
    customer_subscription_update_model: Optional[shared.CustomerSubscriptionUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    customer_subscription_update_model1: Optional[shared.CustomerSubscriptionUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    customer_subscription_update_model2: Optional[shared.CustomerSubscriptionUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    customer_subscription_update_model3: Optional[shared.CustomerSubscriptionUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutConsumerV1CustomersSubscriptionsIDRequest:
    path_params: PutConsumerV1CustomersSubscriptionsIDPathParams = field()
    request: Optional[PutConsumerV1CustomersSubscriptionsIDRequests] = field(default=None)
    

@dataclass
class PutConsumerV1CustomersSubscriptionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    

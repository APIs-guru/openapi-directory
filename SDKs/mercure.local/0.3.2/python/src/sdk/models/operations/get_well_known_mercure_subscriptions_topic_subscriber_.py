from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWellKnownMercureSubscriptionsTopicSubscriberPathParams:
    subscriber: str = field(metadata={'path_param': { 'field_name': 'subscriber', 'style': 'simple', 'explode': False }})
    topic: str = field(metadata={'path_param': { 'field_name': 'topic', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWellKnownMercureSubscriptionsTopicSubscriberRequest:
    path_params: GetWellKnownMercureSubscriptionsTopicSubscriberPathParams = field()
    

@dataclass
class GetWellKnownMercureSubscriptionsTopicSubscriberResponse:
    content_type: str = field()
    status_code: int = field()
    subscriptions: Optional[shared.Subscriptions] = field(default=None)
    

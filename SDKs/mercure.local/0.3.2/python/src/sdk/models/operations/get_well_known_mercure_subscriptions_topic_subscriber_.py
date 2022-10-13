from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWellKnownMercureSubscriptionsTopicSubscriberPathParams:
    subscriber: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriber', 'style': 'simple', 'explode': False }})
    topic: str = field(default=None, metadata={'path_param': { 'field_name': 'topic', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWellKnownMercureSubscriptionsTopicSubscriberRequest:
    path_params: GetWellKnownMercureSubscriptionsTopicSubscriberPathParams = field(default=None)
    

@dataclass
class GetWellKnownMercureSubscriptionsTopicSubscriberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    subscriptions: Optional[shared.Subscriptions] = field(default=None)
    

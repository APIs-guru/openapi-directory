from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWellKnownMercureSubscriptionsTopicPathParams:
    topic: str = field(default=None, metadata={'path_param': { 'field_name': 'topic', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWellKnownMercureSubscriptionsTopicRequest:
    path_params: GetWellKnownMercureSubscriptionsTopicPathParams = field(default=None)
    

@dataclass
class GetWellKnownMercureSubscriptionsTopicResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    subscriptions: Optional[shared.Subscriptions] = field(default=None)
    

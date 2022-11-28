from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWellKnownMercureSubscriptionsTopicPathParams:
    topic: str = field(metadata={'path_param': { 'field_name': 'topic', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWellKnownMercureSubscriptionsTopicRequest:
    path_params: GetWellKnownMercureSubscriptionsTopicPathParams = field()
    

@dataclass
class GetWellKnownMercureSubscriptionsTopicResponse:
    content_type: str = field()
    status_code: int = field()
    subscriptions: Optional[shared.Subscriptions] = field(default=None)
    

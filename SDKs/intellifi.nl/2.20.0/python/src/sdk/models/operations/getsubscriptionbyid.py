from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubscriptionByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionByIDRequest:
    path_params: GetSubscriptionByIDPathParams = field()
    

@dataclass
class GetSubscriptionByIDResponse:
    content_type: str = field()
    status_code: int = field()
    subscription: Optional[shared.Subscription] = field(default=None)
    

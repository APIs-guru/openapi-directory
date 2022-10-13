from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubscriptionByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionByIDRequest:
    path_params: GetSubscriptionByIDPathParams = field(default=None)
    

@dataclass
class GetSubscriptionByIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    subscription: Optional[shared.Subscription] = field(default=None)
    

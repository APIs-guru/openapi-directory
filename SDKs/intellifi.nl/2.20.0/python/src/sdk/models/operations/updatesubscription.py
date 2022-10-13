from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSubscriptionPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSubscriptionRequest:
    path_params: UpdateSubscriptionPathParams = field(default=None)
    request: shared.Subscription = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSubscriptionResponse:
    content_type: str = field(default=None)
    response_default_resource: Optional[shared.ResponseDefaultResource] = field(default=None)
    status_code: int = field(default=None)
    

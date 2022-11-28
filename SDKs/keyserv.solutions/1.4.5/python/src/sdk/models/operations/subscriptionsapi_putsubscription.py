from dataclasses import dataclass, field
from typing import Any
from sdk.models import shared


@dataclass
class SubscriptionsAPIPutSubscriptionRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubscriptionsAPIPutSubscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    

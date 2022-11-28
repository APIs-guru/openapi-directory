from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SubscriptionsAPISaveRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubscriptionsAPISaveResponse:
    content_type: str = field()
    status_code: int = field()
    subscriptions_api_save_201_application_json_one_of: Optional[Any] = field(default=None)
    

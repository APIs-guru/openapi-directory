from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SubscriptionsAPICountRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubscriptionsAPICountResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    subscriptions_api_count_200_application_json_one_of: Optional[Any] = field(default=None)
    

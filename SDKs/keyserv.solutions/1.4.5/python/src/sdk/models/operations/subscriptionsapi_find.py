from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SubscriptionsAPIFindRequest:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubscriptionsAPIFindResponse:
    content_type: str = field()
    status_code: int = field()
    subscriptions_api_find_200_application_json_one_of: Optional[Any] = field(default=None)
    

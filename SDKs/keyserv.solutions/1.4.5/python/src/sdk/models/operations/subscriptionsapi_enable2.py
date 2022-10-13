from dataclasses import dataclass, field
from typing import Any
from sdk.models import shared


@dataclass
class SubscriptionsAPIEnable2Request:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubscriptionsAPIEnable2Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

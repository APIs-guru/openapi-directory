from dataclasses import dataclass, field
from typing import Any
from sdk.models import shared


@dataclass
class SubscriptionsAPIDisable2Request:
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SubscriptionsAPIDisable2Response:
    content_type: str = field()
    status_code: int = field()
    

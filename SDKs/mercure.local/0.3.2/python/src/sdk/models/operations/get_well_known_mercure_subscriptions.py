from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWellKnownMercureSubscriptionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    subscriptions: Optional[shared.Subscriptions] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWellKnownMercureSubscriptionsResponse:
    content_type: str = field()
    status_code: int = field()
    subscriptions: Optional[shared.Subscriptions] = field(default=None)
    

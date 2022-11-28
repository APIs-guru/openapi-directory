from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamAggregatesCreateRequest:
    request: shared.WritableAggregateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamAggregatesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    aggregate: Optional[shared.Aggregate] = field(default=None)
    

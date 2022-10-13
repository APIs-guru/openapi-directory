from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamAggregatesCreateRequest:
    request: shared.WritableAggregate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamAggregatesCreateResponse:
    aggregate: Optional[shared.Aggregate] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

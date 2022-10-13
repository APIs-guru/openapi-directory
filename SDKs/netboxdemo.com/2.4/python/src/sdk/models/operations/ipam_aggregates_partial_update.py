from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamAggregatesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamAggregatesPartialUpdateRequest:
    path_params: IpamAggregatesPartialUpdatePathParams = field(default=None)
    request: shared.WritableAggregate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamAggregatesPartialUpdateResponse:
    aggregate: Optional[shared.Aggregate] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

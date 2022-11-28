from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamAggregatesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamAggregatesReadRequest:
    path_params: IpamAggregatesReadPathParams = field()
    

@dataclass
class IpamAggregatesReadResponse:
    content_type: str = field()
    status_code: int = field()
    aggregate: Optional[shared.Aggregate] = field(default=None)
    

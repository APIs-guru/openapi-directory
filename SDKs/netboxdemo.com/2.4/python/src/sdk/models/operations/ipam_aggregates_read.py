from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamAggregatesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamAggregatesReadRequest:
    path_params: IpamAggregatesReadPathParams = field(default=None)
    

@dataclass
class IpamAggregatesReadResponse:
    aggregate: Optional[shared.Aggregate] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

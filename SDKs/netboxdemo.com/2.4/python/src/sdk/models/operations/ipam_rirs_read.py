from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamRirsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamRirsReadRequest:
    path_params: IpamRirsReadPathParams = field()
    

@dataclass
class IpamRirsReadResponse:
    content_type: str = field()
    status_code: int = field()
    rir: Optional[shared.Rir] = field(default=None)
    

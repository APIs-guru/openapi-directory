from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamRirsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamRirsReadRequest:
    path_params: IpamRirsReadPathParams = field(default=None)
    

@dataclass
class IpamRirsReadResponse:
    content_type: str = field(default=None)
    rir: Optional[shared.Rir] = field(default=None)
    status_code: int = field(default=None)
    

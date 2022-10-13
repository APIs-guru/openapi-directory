from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamPrefixesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamPrefixesReadRequest:
    path_params: IpamPrefixesReadPathParams = field(default=None)
    

@dataclass
class IpamPrefixesReadResponse:
    content_type: str = field(default=None)
    prefix: Optional[shared.Prefix] = field(default=None)
    status_code: int = field(default=None)
    

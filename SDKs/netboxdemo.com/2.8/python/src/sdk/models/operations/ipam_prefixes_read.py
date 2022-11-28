from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamPrefixesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamPrefixesReadRequest:
    path_params: IpamPrefixesReadPathParams = field()
    

@dataclass
class IpamPrefixesReadResponse:
    content_type: str = field()
    status_code: int = field()
    prefix: Optional[shared.Prefix] = field(default=None)
    

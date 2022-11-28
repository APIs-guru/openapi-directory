from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamPrefixesAvailableIpsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamPrefixesAvailableIpsReadRequest:
    path_params: IpamPrefixesAvailableIpsReadPathParams = field()
    

@dataclass
class IpamPrefixesAvailableIpsReadResponse:
    content_type: str = field()
    status_code: int = field()
    prefix: Optional[shared.Prefix] = field(default=None)
    

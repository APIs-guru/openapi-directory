from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class IpamPrefixesAvailableIpsCreatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamPrefixesAvailableIpsCreateRequest:
    path_params: IpamPrefixesAvailableIpsCreatePathParams = field(default=None)
    request: shared.WritableAvailableIP = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamPrefixesAvailableIpsCreateResponse:
    available_ips: Optional[List[shared.AvailableIP]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

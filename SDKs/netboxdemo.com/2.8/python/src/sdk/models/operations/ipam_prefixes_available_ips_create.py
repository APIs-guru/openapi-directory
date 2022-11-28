from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class IpamPrefixesAvailableIpsCreatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamPrefixesAvailableIpsCreateRequest:
    path_params: IpamPrefixesAvailableIpsCreatePathParams = field()
    

@dataclass
class IpamPrefixesAvailableIpsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    available_ips: Optional[List[shared.AvailableIP]] = field(default=None)
    

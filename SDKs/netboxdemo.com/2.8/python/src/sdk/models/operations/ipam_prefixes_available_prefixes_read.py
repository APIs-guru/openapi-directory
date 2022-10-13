from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class IpamPrefixesAvailablePrefixesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamPrefixesAvailablePrefixesReadRequest:
    path_params: IpamPrefixesAvailablePrefixesReadPathParams = field(default=None)
    

@dataclass
class IpamPrefixesAvailablePrefixesReadResponse:
    available_prefixes: Optional[List[shared.AvailablePrefix]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

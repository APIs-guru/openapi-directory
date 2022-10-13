from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class IpamPrefixesAvailablePrefixesCreatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamPrefixesAvailablePrefixesCreateRequest:
    path_params: IpamPrefixesAvailablePrefixesCreatePathParams = field(default=None)
    request: shared.WritablePrefix = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamPrefixesAvailablePrefixesCreateResponse:
    available_prefixes: Optional[List[shared.AvailablePrefix]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

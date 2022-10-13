from dataclasses import dataclass, field
from typing import Optional
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
    content_type: str = field(default=None)
    prefix: Optional[shared.Prefix] = field(default=None)
    status_code: int = field(default=None)
    

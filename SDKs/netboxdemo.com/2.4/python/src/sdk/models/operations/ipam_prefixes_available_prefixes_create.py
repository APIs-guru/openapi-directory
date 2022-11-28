from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamPrefixesAvailablePrefixesCreatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamPrefixesAvailablePrefixesCreateRequest:
    path_params: IpamPrefixesAvailablePrefixesCreatePathParams = field()
    request: shared.WritablePrefixInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamPrefixesAvailablePrefixesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    prefix: Optional[shared.Prefix] = field(default=None)
    

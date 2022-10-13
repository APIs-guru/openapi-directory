from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamRirsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamRirsUpdateRequest:
    path_params: IpamRirsUpdatePathParams = field(default=None)
    request: shared.Rir = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamRirsUpdateResponse:
    content_type: str = field(default=None)
    rir: Optional[shared.Rir] = field(default=None)
    status_code: int = field(default=None)
    

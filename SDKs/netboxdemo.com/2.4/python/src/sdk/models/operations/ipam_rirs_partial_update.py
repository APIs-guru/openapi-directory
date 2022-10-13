from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamRirsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamRirsPartialUpdateRequest:
    path_params: IpamRirsPartialUpdatePathParams = field(default=None)
    request: shared.Rir = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamRirsPartialUpdateResponse:
    content_type: str = field(default=None)
    rir: Optional[shared.Rir] = field(default=None)
    status_code: int = field(default=None)
    

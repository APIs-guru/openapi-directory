from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamServicesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamServicesPartialUpdateRequest:
    path_params: IpamServicesPartialUpdatePathParams = field(default=None)
    request: shared.WritableService = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamServicesPartialUpdateResponse:
    content_type: str = field(default=None)
    service: Optional[shared.Service] = field(default=None)
    status_code: int = field(default=None)
    

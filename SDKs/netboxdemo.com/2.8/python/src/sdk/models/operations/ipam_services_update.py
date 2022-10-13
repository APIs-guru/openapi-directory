from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamServicesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamServicesUpdateRequest:
    path_params: IpamServicesUpdatePathParams = field(default=None)
    request: shared.WritableService = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamServicesUpdateResponse:
    content_type: str = field(default=None)
    service: Optional[shared.Service] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class IpamServicesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamServicesReadRequest:
    path_params: IpamServicesReadPathParams = field()
    

@dataclass
class IpamServicesReadResponse:
    content_type: str = field()
    status_code: int = field()
    service: Optional[shared.Service] = field(default=None)
    

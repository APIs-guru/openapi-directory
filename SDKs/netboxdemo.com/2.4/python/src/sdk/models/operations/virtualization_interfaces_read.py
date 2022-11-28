from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationInterfacesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationInterfacesReadRequest:
    path_params: VirtualizationInterfacesReadPathParams = field()
    

@dataclass
class VirtualizationInterfacesReadResponse:
    content_type: str = field()
    status_code: int = field()
    interface: Optional[shared.Interface] = field(default=None)
    

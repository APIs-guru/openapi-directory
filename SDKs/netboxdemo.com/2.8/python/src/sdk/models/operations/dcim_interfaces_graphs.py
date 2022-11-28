from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfacesGraphsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfacesGraphsRequest:
    path_params: DcimInterfacesGraphsPathParams = field()
    

@dataclass
class DcimInterfacesGraphsResponse:
    content_type: str = field()
    status_code: int = field()
    device_interface: Optional[shared.DeviceInterface] = field(default=None)
    

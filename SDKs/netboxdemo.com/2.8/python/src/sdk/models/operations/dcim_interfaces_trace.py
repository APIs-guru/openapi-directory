from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfacesTracePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfacesTraceRequest:
    path_params: DcimInterfacesTracePathParams = field(default=None)
    

@dataclass
class DcimInterfacesTraceResponse:
    content_type: str = field(default=None)
    device_interface: Optional[shared.DeviceInterface] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfacesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfacesPartialUpdateRequest:
    path_params: DcimInterfacesPartialUpdatePathParams = field(default=None)
    request: shared.WritableDeviceInterface = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInterfacesPartialUpdateResponse:
    content_type: str = field(default=None)
    device_interface: Optional[shared.DeviceInterface] = field(default=None)
    status_code: int = field(default=None)
    

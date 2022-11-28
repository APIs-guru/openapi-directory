from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfacesCreateRequest:
    request: shared.WritableDeviceInterfaceInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInterfacesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    device_interface: Optional[shared.DeviceInterface] = field(default=None)
    

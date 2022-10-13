from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfacesCreateRequest:
    request: shared.WritableDeviceInterface = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInterfacesCreateResponse:
    content_type: str = field(default=None)
    device_interface: Optional[shared.DeviceInterface] = field(default=None)
    status_code: int = field(default=None)
    

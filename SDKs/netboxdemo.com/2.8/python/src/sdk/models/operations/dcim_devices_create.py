from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDevicesCreateRequest:
    request: shared.WritableDeviceWithConfigContext = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDevicesCreateResponse:
    content_type: str = field(default=None)
    device_with_config_context: Optional[shared.DeviceWithConfigContext] = field(default=None)
    status_code: int = field(default=None)
    

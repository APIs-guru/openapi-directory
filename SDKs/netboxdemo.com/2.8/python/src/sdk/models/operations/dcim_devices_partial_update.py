from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDevicesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDevicesPartialUpdateRequest:
    path_params: DcimDevicesPartialUpdatePathParams = field(default=None)
    request: shared.WritableDeviceWithConfigContext = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDevicesPartialUpdateResponse:
    content_type: str = field(default=None)
    device_with_config_context: Optional[shared.DeviceWithConfigContext] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDevicesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDevicesUpdateRequest:
    path_params: DcimDevicesUpdatePathParams = field(default=None)
    request: shared.WritableDeviceWithConfigContext = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDevicesUpdateResponse:
    content_type: str = field(default=None)
    device_with_config_context: Optional[shared.DeviceWithConfigContext] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDevicesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDevicesReadRequest:
    path_params: DcimDevicesReadPathParams = field(default=None)
    

@dataclass
class DcimDevicesReadResponse:
    content_type: str = field(default=None)
    device_with_config_context: Optional[shared.DeviceWithConfigContext] = field(default=None)
    status_code: int = field(default=None)
    

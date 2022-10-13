from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDevicesGraphsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDevicesGraphsRequest:
    path_params: DcimDevicesGraphsPathParams = field(default=None)
    

@dataclass
class DcimDevicesGraphsResponse:
    content_type: str = field(default=None)
    device_with_config_context: Optional[shared.DeviceWithConfigContext] = field(default=None)
    status_code: int = field(default=None)
    

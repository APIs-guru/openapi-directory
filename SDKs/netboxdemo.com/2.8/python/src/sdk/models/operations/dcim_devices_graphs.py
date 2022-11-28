from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDevicesGraphsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDevicesGraphsRequest:
    path_params: DcimDevicesGraphsPathParams = field()
    

@dataclass
class DcimDevicesGraphsResponse:
    content_type: str = field()
    status_code: int = field()
    device_with_config_context: Optional[shared.DeviceWithConfigContext] = field(default=None)
    

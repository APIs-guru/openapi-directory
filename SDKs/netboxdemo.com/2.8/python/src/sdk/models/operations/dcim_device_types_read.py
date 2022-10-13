from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceTypesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceTypesReadRequest:
    path_params: DcimDeviceTypesReadPathParams = field(default=None)
    

@dataclass
class DcimDeviceTypesReadResponse:
    content_type: str = field(default=None)
    device_type: Optional[shared.DeviceType] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceTypesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceTypesReadRequest:
    path_params: DcimDeviceTypesReadPathParams = field()
    

@dataclass
class DcimDeviceTypesReadResponse:
    content_type: str = field()
    status_code: int = field()
    device_type: Optional[shared.DeviceType] = field(default=None)
    

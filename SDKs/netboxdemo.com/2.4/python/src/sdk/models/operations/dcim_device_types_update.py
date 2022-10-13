from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceTypesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceTypesUpdateRequest:
    path_params: DcimDeviceTypesUpdatePathParams = field(default=None)
    request: shared.WritableDeviceType = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceTypesUpdateResponse:
    content_type: str = field(default=None)
    device_type: Optional[shared.DeviceType] = field(default=None)
    status_code: int = field(default=None)
    

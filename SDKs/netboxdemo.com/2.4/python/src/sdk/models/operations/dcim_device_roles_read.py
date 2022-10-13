from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceRolesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceRolesReadRequest:
    path_params: DcimDeviceRolesReadPathParams = field(default=None)
    

@dataclass
class DcimDeviceRolesReadResponse:
    content_type: str = field(default=None)
    device_role: Optional[shared.DeviceRole] = field(default=None)
    status_code: int = field(default=None)
    

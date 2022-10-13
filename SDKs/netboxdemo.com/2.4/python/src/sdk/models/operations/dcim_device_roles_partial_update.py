from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceRolesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceRolesPartialUpdateRequest:
    path_params: DcimDeviceRolesPartialUpdatePathParams = field(default=None)
    request: shared.DeviceRole = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceRolesPartialUpdateResponse:
    content_type: str = field(default=None)
    device_role: Optional[shared.DeviceRole] = field(default=None)
    status_code: int = field(default=None)
    

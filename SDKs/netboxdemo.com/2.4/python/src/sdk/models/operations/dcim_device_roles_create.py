from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceRolesCreateRequest:
    request: shared.DeviceRoleInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceRolesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    device_role: Optional[shared.DeviceRole] = field(default=None)
    

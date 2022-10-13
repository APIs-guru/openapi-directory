from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceRolesCreateRequest:
    request: shared.DeviceRole = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceRolesCreateResponse:
    content_type: str = field(default=None)
    device_role: Optional[shared.DeviceRole] = field(default=None)
    status_code: int = field(default=None)
    

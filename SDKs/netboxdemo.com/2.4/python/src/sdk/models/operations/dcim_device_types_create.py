from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceTypesCreateRequest:
    request: shared.WritableDeviceType = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceTypesCreateResponse:
    content_type: str = field(default=None)
    device_type: Optional[shared.DeviceType] = field(default=None)
    status_code: int = field(default=None)
    

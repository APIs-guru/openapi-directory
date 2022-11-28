from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceTypesCreateRequest:
    request: shared.WritableDeviceTypeInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceTypesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    device_type: Optional[shared.DeviceType] = field(default=None)
    

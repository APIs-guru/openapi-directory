from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDevicesCreateRequest:
    request: shared.WritableDeviceInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDevicesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    device: Optional[shared.Device] = field(default=None)
    

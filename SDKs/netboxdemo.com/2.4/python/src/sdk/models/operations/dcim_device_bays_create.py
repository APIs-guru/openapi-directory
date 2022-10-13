from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceBaysCreateRequest:
    request: shared.WritableDeviceBay = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceBaysCreateResponse:
    content_type: str = field(default=None)
    device_bay: Optional[shared.DeviceBay] = field(default=None)
    status_code: int = field(default=None)
    

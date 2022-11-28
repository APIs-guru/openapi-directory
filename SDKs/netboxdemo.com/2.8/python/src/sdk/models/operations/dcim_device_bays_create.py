from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceBaysCreateRequest:
    request: shared.WritableDeviceBayInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceBaysCreateResponse:
    content_type: str = field()
    status_code: int = field()
    device_bay: Optional[shared.DeviceBay] = field(default=None)
    

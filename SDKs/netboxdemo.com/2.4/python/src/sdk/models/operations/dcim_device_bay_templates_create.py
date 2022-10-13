from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceBayTemplatesCreateRequest:
    request: shared.WritableDeviceBayTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceBayTemplatesCreateResponse:
    content_type: str = field(default=None)
    device_bay_template: Optional[shared.DeviceBayTemplate] = field(default=None)
    status_code: int = field(default=None)
    

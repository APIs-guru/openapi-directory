from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceBayTemplatesCreateRequest:
    request: shared.WritableDeviceBayTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceBayTemplatesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    device_bay_template: Optional[shared.DeviceBayTemplate] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceBayTemplatesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceBayTemplatesPartialUpdateRequest:
    path_params: DcimDeviceBayTemplatesPartialUpdatePathParams = field(default=None)
    request: shared.WritableDeviceBayTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceBayTemplatesPartialUpdateResponse:
    content_type: str = field(default=None)
    device_bay_template: Optional[shared.DeviceBayTemplate] = field(default=None)
    status_code: int = field(default=None)
    

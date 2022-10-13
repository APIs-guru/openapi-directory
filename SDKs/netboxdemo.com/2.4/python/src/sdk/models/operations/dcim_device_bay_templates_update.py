from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceBayTemplatesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceBayTemplatesUpdateRequest:
    path_params: DcimDeviceBayTemplatesUpdatePathParams = field(default=None)
    request: shared.WritableDeviceBayTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceBayTemplatesUpdateResponse:
    content_type: str = field(default=None)
    device_bay_template: Optional[shared.DeviceBayTemplate] = field(default=None)
    status_code: int = field(default=None)
    

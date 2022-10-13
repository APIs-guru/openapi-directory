from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceBayTemplatesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceBayTemplatesReadRequest:
    path_params: DcimDeviceBayTemplatesReadPathParams = field(default=None)
    

@dataclass
class DcimDeviceBayTemplatesReadResponse:
    content_type: str = field(default=None)
    device_bay_template: Optional[shared.DeviceBayTemplate] = field(default=None)
    status_code: int = field(default=None)
    

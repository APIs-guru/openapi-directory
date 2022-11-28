from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceBayTemplatesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceBayTemplatesReadRequest:
    path_params: DcimDeviceBayTemplatesReadPathParams = field()
    

@dataclass
class DcimDeviceBayTemplatesReadResponse:
    content_type: str = field()
    status_code: int = field()
    device_bay_template: Optional[shared.DeviceBayTemplate] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceBaysReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceBaysReadRequest:
    path_params: DcimDeviceBaysReadPathParams = field()
    

@dataclass
class DcimDeviceBaysReadResponse:
    content_type: str = field()
    status_code: int = field()
    device_bay: Optional[shared.DeviceBay] = field(default=None)
    

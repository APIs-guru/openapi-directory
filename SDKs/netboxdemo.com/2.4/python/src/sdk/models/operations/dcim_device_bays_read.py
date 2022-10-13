from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceBaysReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceBaysReadRequest:
    path_params: DcimDeviceBaysReadPathParams = field(default=None)
    

@dataclass
class DcimDeviceBaysReadResponse:
    content_type: str = field(default=None)
    device_bay: Optional[shared.DeviceBay] = field(default=None)
    status_code: int = field(default=None)
    

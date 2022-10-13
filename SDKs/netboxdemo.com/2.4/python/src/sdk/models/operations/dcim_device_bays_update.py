from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceBaysUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceBaysUpdateRequest:
    path_params: DcimDeviceBaysUpdatePathParams = field(default=None)
    request: shared.WritableDeviceBay = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceBaysUpdateResponse:
    content_type: str = field(default=None)
    device_bay: Optional[shared.DeviceBay] = field(default=None)
    status_code: int = field(default=None)
    

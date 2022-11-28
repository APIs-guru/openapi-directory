from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDevicesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDevicesUpdateRequest:
    path_params: DcimDevicesUpdatePathParams = field()
    request: shared.WritableDeviceInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDevicesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    device: Optional[shared.Device] = field(default=None)
    

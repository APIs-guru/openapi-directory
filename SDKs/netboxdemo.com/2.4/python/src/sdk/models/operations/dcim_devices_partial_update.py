from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDevicesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDevicesPartialUpdateRequest:
    path_params: DcimDevicesPartialUpdatePathParams = field()
    request: shared.WritableDeviceInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDevicesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    device: Optional[shared.Device] = field(default=None)
    

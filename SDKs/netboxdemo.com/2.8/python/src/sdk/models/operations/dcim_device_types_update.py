from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceTypesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceTypesUpdateRequest:
    path_params: DcimDeviceTypesUpdatePathParams = field()
    request: shared.WritableDeviceTypeInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceTypesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    device_type: Optional[shared.DeviceType] = field(default=None)
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceBaysPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceBaysPartialUpdateRequest:
    path_params: DcimDeviceBaysPartialUpdatePathParams = field()
    request: shared.WritableDeviceBayInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceBaysPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    device_bay: Optional[shared.DeviceBay] = field(default=None)
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceBaysUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceBaysUpdateRequest:
    path_params: DcimDeviceBaysUpdatePathParams = field()
    request: shared.WritableDeviceBayInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceBaysUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    device_bay: Optional[shared.DeviceBay] = field(default=None)
    

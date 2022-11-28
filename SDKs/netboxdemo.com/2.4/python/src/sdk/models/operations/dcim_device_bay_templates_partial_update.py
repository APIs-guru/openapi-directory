from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceBayTemplatesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceBayTemplatesPartialUpdateRequest:
    path_params: DcimDeviceBayTemplatesPartialUpdatePathParams = field()
    request: shared.WritableDeviceBayTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceBayTemplatesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    device_bay_template: Optional[shared.DeviceBayTemplate] = field(default=None)
    

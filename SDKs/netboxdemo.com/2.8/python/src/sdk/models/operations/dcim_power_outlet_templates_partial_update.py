from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerOutletTemplatesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerOutletTemplatesPartialUpdateRequest:
    path_params: DcimPowerOutletTemplatesPartialUpdatePathParams = field()
    request: shared.WritablePowerOutletTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerOutletTemplatesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    power_outlet_template: Optional[shared.PowerOutletTemplate] = field(default=None)
    

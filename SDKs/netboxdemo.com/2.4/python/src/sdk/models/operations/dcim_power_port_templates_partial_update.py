from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPortTemplatesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPortTemplatesPartialUpdateRequest:
    path_params: DcimPowerPortTemplatesPartialUpdatePathParams = field()
    request: shared.WritablePowerPortTemplateInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerPortTemplatesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    power_port_template: Optional[shared.PowerPortTemplate] = field(default=None)
    

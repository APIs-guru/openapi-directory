from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPanelsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPanelsUpdateRequest:
    path_params: DcimPowerPanelsUpdatePathParams = field()
    request: shared.WritablePowerPanelInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerPanelsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    power_panel: Optional[shared.PowerPanel] = field(default=None)
    

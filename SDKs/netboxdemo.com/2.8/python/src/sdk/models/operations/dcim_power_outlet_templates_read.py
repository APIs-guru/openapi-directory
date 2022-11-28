from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerOutletTemplatesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerOutletTemplatesReadRequest:
    path_params: DcimPowerOutletTemplatesReadPathParams = field()
    

@dataclass
class DcimPowerOutletTemplatesReadResponse:
    content_type: str = field()
    status_code: int = field()
    power_outlet_template: Optional[shared.PowerOutletTemplate] = field(default=None)
    

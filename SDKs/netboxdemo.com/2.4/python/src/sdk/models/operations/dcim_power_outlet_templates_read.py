from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerOutletTemplatesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerOutletTemplatesReadRequest:
    path_params: DcimPowerOutletTemplatesReadPathParams = field(default=None)
    

@dataclass
class DcimPowerOutletTemplatesReadResponse:
    content_type: str = field(default=None)
    power_outlet_template: Optional[shared.PowerOutletTemplate] = field(default=None)
    status_code: int = field(default=None)
    

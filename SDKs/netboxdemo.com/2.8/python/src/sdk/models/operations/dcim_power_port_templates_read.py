from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPortTemplatesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPortTemplatesReadRequest:
    path_params: DcimPowerPortTemplatesReadPathParams = field()
    

@dataclass
class DcimPowerPortTemplatesReadResponse:
    content_type: str = field()
    status_code: int = field()
    power_port_template: Optional[shared.PowerPortTemplate] = field(default=None)
    

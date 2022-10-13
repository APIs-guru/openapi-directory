from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerPortTemplatesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerPortTemplatesUpdateRequest:
    path_params: DcimPowerPortTemplatesUpdatePathParams = field(default=None)
    request: shared.WritablePowerPortTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerPortTemplatesUpdateResponse:
    content_type: str = field(default=None)
    power_port_template: Optional[shared.PowerPortTemplate] = field(default=None)
    status_code: int = field(default=None)
    

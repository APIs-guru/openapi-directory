from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerOutletTemplatesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerOutletTemplatesUpdateRequest:
    path_params: DcimPowerOutletTemplatesUpdatePathParams = field(default=None)
    request: shared.WritablePowerOutletTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerOutletTemplatesUpdateResponse:
    content_type: str = field(default=None)
    power_outlet_template: Optional[shared.PowerOutletTemplate] = field(default=None)
    status_code: int = field(default=None)
    

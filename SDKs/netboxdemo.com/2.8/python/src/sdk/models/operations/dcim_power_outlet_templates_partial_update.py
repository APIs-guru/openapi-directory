from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimPowerOutletTemplatesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimPowerOutletTemplatesPartialUpdateRequest:
    path_params: DcimPowerOutletTemplatesPartialUpdatePathParams = field(default=None)
    request: shared.WritablePowerOutletTemplate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimPowerOutletTemplatesPartialUpdateResponse:
    content_type: str = field(default=None)
    power_outlet_template: Optional[shared.PowerOutletTemplate] = field(default=None)
    status_code: int = field(default=None)
    

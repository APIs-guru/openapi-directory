from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AquifersReadPathParams:
    aquifer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'aquifer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AquifersReadRequest:
    path_params: AquifersReadPathParams = field(default=None)
    

@dataclass
class AquifersReadResponse:
    aquifer: Optional[shared.Aquifer] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

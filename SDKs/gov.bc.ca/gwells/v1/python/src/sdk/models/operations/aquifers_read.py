from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AquifersReadPathParams:
    aquifer_id: int = field(metadata={'path_param': { 'field_name': 'aquifer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AquifersReadRequest:
    path_params: AquifersReadPathParams = field()
    

@dataclass
class AquifersReadResponse:
    content_type: str = field()
    status_code: int = field()
    aquifer: Optional[shared.Aquifer] = field(default=None)
    

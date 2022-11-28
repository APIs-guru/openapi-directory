from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimCablesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimCablesReadRequest:
    path_params: DcimCablesReadPathParams = field()
    

@dataclass
class DcimCablesReadResponse:
    content_type: str = field()
    status_code: int = field()
    cable: Optional[shared.Cable] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimCablesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimCablesReadRequest:
    path_params: DcimCablesReadPathParams = field(default=None)
    

@dataclass
class DcimCablesReadResponse:
    cable: Optional[shared.Cable] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

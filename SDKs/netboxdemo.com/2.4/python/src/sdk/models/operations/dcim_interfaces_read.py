from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfacesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfacesReadRequest:
    path_params: DcimInterfacesReadPathParams = field()
    

@dataclass
class DcimInterfacesReadResponse:
    content_type: str = field()
    status_code: int = field()
    interface: Optional[shared.Interface] = field(default=None)
    

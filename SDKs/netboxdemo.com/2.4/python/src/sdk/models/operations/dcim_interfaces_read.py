from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfacesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfacesReadRequest:
    path_params: DcimInterfacesReadPathParams = field(default=None)
    

@dataclass
class DcimInterfacesReadResponse:
    content_type: str = field(default=None)
    interface: Optional[shared.Interface] = field(default=None)
    status_code: int = field(default=None)
    

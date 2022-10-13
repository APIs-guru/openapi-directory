from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfacesGraphsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfacesGraphsRequest:
    path_params: DcimInterfacesGraphsPathParams = field(default=None)
    

@dataclass
class DcimInterfacesGraphsResponse:
    content_type: str = field(default=None)
    interface: Optional[shared.Interface] = field(default=None)
    status_code: int = field(default=None)
    

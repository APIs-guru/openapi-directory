from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackRolesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackRolesReadRequest:
    path_params: DcimRackRolesReadPathParams = field()
    

@dataclass
class DcimRackRolesReadResponse:
    content_type: str = field()
    status_code: int = field()
    rack_role: Optional[shared.RackRole] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackRolesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackRolesReadRequest:
    path_params: DcimRackRolesReadPathParams = field(default=None)
    

@dataclass
class DcimRackRolesReadResponse:
    content_type: str = field(default=None)
    rack_role: Optional[shared.RackRole] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackRolesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackRolesPartialUpdateRequest:
    path_params: DcimRackRolesPartialUpdatePathParams = field(default=None)
    request: shared.RackRole = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRackRolesPartialUpdateResponse:
    content_type: str = field(default=None)
    rack_role: Optional[shared.RackRole] = field(default=None)
    status_code: int = field(default=None)
    

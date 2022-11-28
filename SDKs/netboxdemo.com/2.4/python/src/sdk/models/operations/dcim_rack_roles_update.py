from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackRolesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackRolesUpdateRequest:
    path_params: DcimRackRolesUpdatePathParams = field()
    request: shared.RackRoleInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRackRolesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    rack_role: Optional[shared.RackRole] = field(default=None)
    

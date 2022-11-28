from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackRolesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackRolesPartialUpdateRequest:
    path_params: DcimRackRolesPartialUpdatePathParams = field()
    request: shared.RackRoleInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRackRolesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    rack_role: Optional[shared.RackRole] = field(default=None)
    

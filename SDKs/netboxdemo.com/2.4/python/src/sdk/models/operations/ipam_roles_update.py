from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class IpamRolesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamRolesUpdateRequest:
    path_params: IpamRolesUpdatePathParams = field()
    request: shared.RoleInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamRolesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    role: Optional[shared.Role] = field(default=None)
    

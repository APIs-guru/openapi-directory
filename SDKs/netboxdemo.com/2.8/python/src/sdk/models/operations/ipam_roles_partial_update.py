from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class IpamRolesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IpamRolesPartialUpdateRequest:
    path_params: IpamRolesPartialUpdatePathParams = field()
    request: shared.RoleInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class IpamRolesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    role: Optional[shared.Role] = field(default=None)
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceRolesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceRolesPartialUpdateRequest:
    path_params: DcimDeviceRolesPartialUpdatePathParams = field()
    request: shared.DeviceRoleInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceRolesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    device_role: Optional[shared.DeviceRole] = field(default=None)
    

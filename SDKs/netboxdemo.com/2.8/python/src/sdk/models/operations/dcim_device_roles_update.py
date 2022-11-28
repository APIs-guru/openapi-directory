from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimDeviceRolesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimDeviceRolesUpdateRequest:
    path_params: DcimDeviceRolesUpdatePathParams = field()
    request: shared.DeviceRoleInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimDeviceRolesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    device_role: Optional[shared.DeviceRole] = field(default=None)
    

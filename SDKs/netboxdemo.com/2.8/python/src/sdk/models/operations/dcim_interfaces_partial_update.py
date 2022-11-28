from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimInterfacesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimInterfacesPartialUpdateRequest:
    path_params: DcimInterfacesPartialUpdatePathParams = field()
    request: shared.WritableDeviceInterfaceInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimInterfacesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    device_interface: Optional[shared.DeviceInterface] = field(default=None)
    

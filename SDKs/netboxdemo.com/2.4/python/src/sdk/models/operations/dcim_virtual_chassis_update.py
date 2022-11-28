from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimVirtualChassisUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimVirtualChassisUpdateRequest:
    path_params: DcimVirtualChassisUpdatePathParams = field()
    request: shared.WritableVirtualChassisInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimVirtualChassisUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    virtual_chassis: Optional[shared.VirtualChassis] = field(default=None)
    

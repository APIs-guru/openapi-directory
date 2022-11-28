from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackGroupsUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackGroupsUpdateRequest:
    path_params: DcimRackGroupsUpdatePathParams = field()
    request: shared.WritableRackGroupInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRackGroupsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    rack_group: Optional[shared.RackGroup] = field(default=None)
    

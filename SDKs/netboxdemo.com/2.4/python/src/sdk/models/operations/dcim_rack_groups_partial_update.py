from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRackGroupsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRackGroupsPartialUpdateRequest:
    path_params: DcimRackGroupsPartialUpdatePathParams = field()
    request: shared.WritableRackGroupInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRackGroupsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    rack_group: Optional[shared.RackGroup] = field(default=None)
    

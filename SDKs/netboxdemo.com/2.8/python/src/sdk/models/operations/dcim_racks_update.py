from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRacksUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRacksUpdateRequest:
    path_params: DcimRacksUpdatePathParams = field()
    request: shared.WritableRackInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimRacksUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    rack: Optional[shared.Rack] = field(default=None)
    

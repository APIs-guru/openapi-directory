from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimFrontPortsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimFrontPortsPartialUpdateRequest:
    path_params: DcimFrontPortsPartialUpdatePathParams = field()
    request: shared.WritableFrontPortInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimFrontPortsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    front_port: Optional[shared.FrontPort] = field(default=None)
    

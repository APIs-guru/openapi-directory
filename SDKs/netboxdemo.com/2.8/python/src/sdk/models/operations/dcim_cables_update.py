from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimCablesUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimCablesUpdateRequest:
    path_params: DcimCablesUpdatePathParams = field()
    request: shared.WritableCableInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimCablesUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    cable: Optional[shared.Cable] = field(default=None)
    

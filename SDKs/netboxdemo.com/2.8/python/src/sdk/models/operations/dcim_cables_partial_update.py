from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DcimCablesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimCablesPartialUpdateRequest:
    path_params: DcimCablesPartialUpdatePathParams = field()
    request: shared.WritableCableInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DcimCablesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    cable: Optional[shared.Cable] = field(default=None)
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitsPartialUpdateRequest:
    path_params: CircuitsCircuitsPartialUpdatePathParams = field()
    request: shared.WritableCircuitInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CircuitsCircuitsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    circuit: Optional[shared.Circuit] = field(default=None)
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitTypesPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitTypesPartialUpdateRequest:
    path_params: CircuitsCircuitTypesPartialUpdatePathParams = field()
    request: shared.CircuitTypeInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CircuitsCircuitTypesPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    circuit_type: Optional[shared.CircuitType] = field(default=None)
    

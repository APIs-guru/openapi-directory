from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitTerminationsPartialUpdatePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitTerminationsPartialUpdateRequest:
    path_params: CircuitsCircuitTerminationsPartialUpdatePathParams = field()
    request: shared.WritableCircuitTerminationInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CircuitsCircuitTerminationsPartialUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    circuit_termination: Optional[shared.CircuitTermination] = field(default=None)
    

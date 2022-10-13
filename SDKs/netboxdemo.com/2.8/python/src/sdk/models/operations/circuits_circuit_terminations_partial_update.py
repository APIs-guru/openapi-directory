from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitTerminationsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitTerminationsPartialUpdateRequest:
    path_params: CircuitsCircuitTerminationsPartialUpdatePathParams = field(default=None)
    request: shared.WritableCircuitTermination = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CircuitsCircuitTerminationsPartialUpdateResponse:
    circuit_termination: Optional[shared.CircuitTermination] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

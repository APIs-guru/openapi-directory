from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitTypesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitTypesReadRequest:
    path_params: CircuitsCircuitTypesReadPathParams = field()
    

@dataclass
class CircuitsCircuitTypesReadResponse:
    content_type: str = field()
    status_code: int = field()
    circuit_type: Optional[shared.CircuitType] = field(default=None)
    

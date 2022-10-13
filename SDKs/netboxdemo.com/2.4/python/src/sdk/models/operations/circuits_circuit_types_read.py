from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitTypesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitTypesReadRequest:
    path_params: CircuitsCircuitTypesReadPathParams = field(default=None)
    

@dataclass
class CircuitsCircuitTypesReadResponse:
    circuit_type: Optional[shared.CircuitType] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

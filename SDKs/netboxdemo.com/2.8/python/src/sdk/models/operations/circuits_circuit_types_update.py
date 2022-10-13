from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitTypesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitTypesUpdateRequest:
    path_params: CircuitsCircuitTypesUpdatePathParams = field(default=None)
    request: shared.CircuitType = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CircuitsCircuitTypesUpdateResponse:
    circuit_type: Optional[shared.CircuitType] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

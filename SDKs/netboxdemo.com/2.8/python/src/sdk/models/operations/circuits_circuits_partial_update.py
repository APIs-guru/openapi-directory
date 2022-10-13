from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitsPartialUpdateRequest:
    path_params: CircuitsCircuitsPartialUpdatePathParams = field(default=None)
    request: shared.WritableCircuit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CircuitsCircuitsPartialUpdateResponse:
    circuit: Optional[shared.Circuit] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

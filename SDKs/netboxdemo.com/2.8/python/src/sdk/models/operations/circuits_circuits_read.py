from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitsReadRequest:
    path_params: CircuitsCircuitsReadPathParams = field()
    

@dataclass
class CircuitsCircuitsReadResponse:
    content_type: str = field()
    status_code: int = field()
    circuit: Optional[shared.Circuit] = field(default=None)
    

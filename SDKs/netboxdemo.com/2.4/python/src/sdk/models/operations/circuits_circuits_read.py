from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsCircuitsReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsCircuitsReadRequest:
    path_params: CircuitsCircuitsReadPathParams = field(default=None)
    

@dataclass
class CircuitsCircuitsReadResponse:
    circuit: Optional[shared.Circuit] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

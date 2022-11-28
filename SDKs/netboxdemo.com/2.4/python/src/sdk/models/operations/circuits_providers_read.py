from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsProvidersReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsProvidersReadRequest:
    path_params: CircuitsProvidersReadPathParams = field()
    

@dataclass
class CircuitsProvidersReadResponse:
    content_type: str = field()
    status_code: int = field()
    provider: Optional[shared.Provider] = field(default=None)
    

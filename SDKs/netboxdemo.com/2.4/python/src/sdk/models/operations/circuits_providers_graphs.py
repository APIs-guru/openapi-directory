from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsProvidersGraphsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsProvidersGraphsRequest:
    path_params: CircuitsProvidersGraphsPathParams = field()
    

@dataclass
class CircuitsProvidersGraphsResponse:
    content_type: str = field()
    status_code: int = field()
    provider: Optional[shared.Provider] = field(default=None)
    

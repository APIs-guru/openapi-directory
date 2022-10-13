from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CircuitsProvidersGraphsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CircuitsProvidersGraphsRequest:
    path_params: CircuitsProvidersGraphsPathParams = field(default=None)
    

@dataclass
class CircuitsProvidersGraphsResponse:
    content_type: str = field(default=None)
    provider: Optional[shared.Provider] = field(default=None)
    status_code: int = field(default=None)
    

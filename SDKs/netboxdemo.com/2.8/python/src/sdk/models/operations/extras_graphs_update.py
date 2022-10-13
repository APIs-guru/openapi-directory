from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasGraphsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasGraphsUpdateRequest:
    path_params: ExtrasGraphsUpdatePathParams = field(default=None)
    request: shared.Graph = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasGraphsUpdateResponse:
    content_type: str = field(default=None)
    graph: Optional[shared.Graph] = field(default=None)
    status_code: int = field(default=None)
    

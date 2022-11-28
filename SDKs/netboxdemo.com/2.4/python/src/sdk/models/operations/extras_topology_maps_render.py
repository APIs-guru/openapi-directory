from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasTopologyMapsRenderPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasTopologyMapsRenderRequest:
    path_params: ExtrasTopologyMapsRenderPathParams = field()
    

@dataclass
class ExtrasTopologyMapsRenderResponse:
    content_type: str = field()
    status_code: int = field()
    topology_map: Optional[shared.TopologyMap] = field(default=None)
    

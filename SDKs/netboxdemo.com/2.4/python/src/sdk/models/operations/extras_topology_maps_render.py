from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasTopologyMapsRenderPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasTopologyMapsRenderRequest:
    path_params: ExtrasTopologyMapsRenderPathParams = field(default=None)
    

@dataclass
class ExtrasTopologyMapsRenderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    topology_map: Optional[shared.TopologyMap] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasTopologyMapsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasTopologyMapsReadRequest:
    path_params: ExtrasTopologyMapsReadPathParams = field()
    

@dataclass
class ExtrasTopologyMapsReadResponse:
    content_type: str = field()
    status_code: int = field()
    topology_map: Optional[shared.TopologyMap] = field(default=None)
    

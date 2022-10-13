from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasTopologyMapsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExtrasTopologyMapsPartialUpdateRequest:
    path_params: ExtrasTopologyMapsPartialUpdatePathParams = field(default=None)
    request: shared.WritableTopologyMap = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasTopologyMapsPartialUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    topology_map: Optional[shared.TopologyMap] = field(default=None)
    

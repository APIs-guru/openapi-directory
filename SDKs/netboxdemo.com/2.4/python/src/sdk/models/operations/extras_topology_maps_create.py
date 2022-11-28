from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasTopologyMapsCreateRequest:
    request: shared.WritableTopologyMapInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasTopologyMapsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    topology_map: Optional[shared.TopologyMap] = field(default=None)
    

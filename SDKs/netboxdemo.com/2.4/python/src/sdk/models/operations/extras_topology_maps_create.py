from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExtrasTopologyMapsCreateRequest:
    request: shared.WritableTopologyMap = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExtrasTopologyMapsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    topology_map: Optional[shared.TopologyMap] = field(default=None)
    

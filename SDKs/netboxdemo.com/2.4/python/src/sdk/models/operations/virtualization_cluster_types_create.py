from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClusterTypesCreateRequest:
    request: shared.ClusterTypeInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationClusterTypesCreateResponse:
    content_type: str = field()
    status_code: int = field()
    cluster_type: Optional[shared.ClusterType] = field(default=None)
    

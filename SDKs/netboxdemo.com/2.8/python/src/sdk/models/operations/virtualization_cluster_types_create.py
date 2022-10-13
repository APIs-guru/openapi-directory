from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClusterTypesCreateRequest:
    request: shared.ClusterType = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationClusterTypesCreateResponse:
    cluster_type: Optional[shared.ClusterType] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

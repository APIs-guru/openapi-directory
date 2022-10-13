from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClustersCreateRequest:
    request: shared.WritableCluster = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationClustersCreateResponse:
    cluster: Optional[shared.Cluster] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClustersUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClustersUpdateRequest:
    path_params: VirtualizationClustersUpdatePathParams = field(default=None)
    request: shared.WritableCluster = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationClustersUpdateResponse:
    cluster: Optional[shared.Cluster] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClusterTypesReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClusterTypesReadRequest:
    path_params: VirtualizationClusterTypesReadPathParams = field()
    

@dataclass
class VirtualizationClusterTypesReadResponse:
    content_type: str = field()
    status_code: int = field()
    cluster_type: Optional[shared.ClusterType] = field(default=None)
    

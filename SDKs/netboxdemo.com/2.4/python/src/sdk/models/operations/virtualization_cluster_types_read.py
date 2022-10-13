from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClusterTypesReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClusterTypesReadRequest:
    path_params: VirtualizationClusterTypesReadPathParams = field(default=None)
    

@dataclass
class VirtualizationClusterTypesReadResponse:
    cluster_type: Optional[shared.ClusterType] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClusterTypesUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClusterTypesUpdateRequest:
    path_params: VirtualizationClusterTypesUpdatePathParams = field(default=None)
    request: shared.ClusterType = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationClusterTypesUpdateResponse:
    cluster_type: Optional[shared.ClusterType] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

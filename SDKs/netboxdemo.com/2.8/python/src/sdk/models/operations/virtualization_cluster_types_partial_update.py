from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClusterTypesPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClusterTypesPartialUpdateRequest:
    path_params: VirtualizationClusterTypesPartialUpdatePathParams = field(default=None)
    request: shared.ClusterType = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationClusterTypesPartialUpdateResponse:
    cluster_type: Optional[shared.ClusterType] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

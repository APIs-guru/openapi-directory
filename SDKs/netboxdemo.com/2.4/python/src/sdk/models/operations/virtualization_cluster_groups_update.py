from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClusterGroupsUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClusterGroupsUpdateRequest:
    path_params: VirtualizationClusterGroupsUpdatePathParams = field(default=None)
    request: shared.ClusterGroup = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationClusterGroupsUpdateResponse:
    cluster_group: Optional[shared.ClusterGroup] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

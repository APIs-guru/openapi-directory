from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClusterGroupsPartialUpdatePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClusterGroupsPartialUpdateRequest:
    path_params: VirtualizationClusterGroupsPartialUpdatePathParams = field(default=None)
    request: shared.ClusterGroup = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationClusterGroupsPartialUpdateResponse:
    cluster_group: Optional[shared.ClusterGroup] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

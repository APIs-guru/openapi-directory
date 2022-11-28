from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClusterGroupsReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClusterGroupsReadRequest:
    path_params: VirtualizationClusterGroupsReadPathParams = field()
    

@dataclass
class VirtualizationClusterGroupsReadResponse:
    content_type: str = field()
    status_code: int = field()
    cluster_group: Optional[shared.ClusterGroup] = field(default=None)
    

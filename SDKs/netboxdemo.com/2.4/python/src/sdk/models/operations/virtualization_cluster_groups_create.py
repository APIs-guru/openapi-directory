from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClusterGroupsCreateRequest:
    request: shared.ClusterGroupInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationClusterGroupsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    cluster_group: Optional[shared.ClusterGroup] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClusterGroupsCreateRequest:
    request: shared.ClusterGroup = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class VirtualizationClusterGroupsCreateResponse:
    cluster_group: Optional[shared.ClusterGroup] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

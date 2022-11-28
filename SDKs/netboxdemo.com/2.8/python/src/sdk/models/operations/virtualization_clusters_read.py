from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualizationClustersReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class VirtualizationClustersReadRequest:
    path_params: VirtualizationClustersReadPathParams = field()
    

@dataclass
class VirtualizationClustersReadResponse:
    content_type: str = field()
    status_code: int = field()
    cluster: Optional[shared.Cluster] = field(default=None)
    

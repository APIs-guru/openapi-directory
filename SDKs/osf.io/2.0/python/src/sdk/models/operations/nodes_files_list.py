from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesFilesListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    provider: str = field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesFilesListRequest:
    path_params: NodesFilesListPathParams = field()
    

@dataclass
class NodesFilesListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

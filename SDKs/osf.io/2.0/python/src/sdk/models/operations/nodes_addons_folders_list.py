from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesAddonsFoldersListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    provider: str = field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesAddonsFoldersListRequest:
    path_params: NodesAddonsFoldersListPathParams = field()
    

@dataclass
class NodesAddonsFoldersListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

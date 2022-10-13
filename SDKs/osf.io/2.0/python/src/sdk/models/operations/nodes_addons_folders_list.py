from dataclasses import dataclass, field
from typing import List


@dataclass
class NodesAddonsFoldersListPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    provider: str = field(default=None, metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesAddonsFoldersListRequest:
    path_params: NodesAddonsFoldersListPathParams = field(default=None)
    

@dataclass
class NodesAddonsFoldersListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

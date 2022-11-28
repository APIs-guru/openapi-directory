from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesAddonReadPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    provider: str = field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesAddonReadRequest:
    path_params: NodesAddonReadPathParams = field()
    

@dataclass
class NodesAddonReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

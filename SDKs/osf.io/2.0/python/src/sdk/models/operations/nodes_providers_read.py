from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesProvidersReadPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    provider: str = field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesProvidersReadRequest:
    path_params: NodesProvidersReadPathParams = field()
    

@dataclass
class NodesProvidersReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

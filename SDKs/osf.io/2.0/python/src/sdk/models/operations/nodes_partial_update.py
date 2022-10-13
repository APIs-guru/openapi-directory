from dataclasses import dataclass, field
from typing import Any


@dataclass
class NodesPartialUpdatePathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesPartialUpdateRequest:
    path_params: NodesPartialUpdatePathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class NodesPartialUpdateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

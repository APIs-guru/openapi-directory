from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesCitationReadPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    style_id: str = field(metadata={'path_param': { 'field_name': 'style_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesCitationReadRequest:
    path_params: NodesCitationReadPathParams = field()
    

@dataclass
class NodesCitationReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

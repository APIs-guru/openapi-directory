from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesDraftRegistrationsReadPathParams:
    draft_id: str = field(metadata={'path_param': { 'field_name': 'draft_id', 'style': 'simple', 'explode': False }})
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesDraftRegistrationsReadRequest:
    path_params: NodesDraftRegistrationsReadPathParams = field()
    

@dataclass
class NodesDraftRegistrationsReadResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

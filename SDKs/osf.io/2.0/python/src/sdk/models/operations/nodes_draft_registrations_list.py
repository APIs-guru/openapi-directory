from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesDraftRegistrationsListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesDraftRegistrationsListRequest:
    path_params: NodesDraftRegistrationsListPathParams = field()
    

@dataclass
class NodesDraftRegistrationsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

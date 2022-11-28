from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesRegistrationsListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesRegistrationsListRequest:
    path_params: NodesRegistrationsListPathParams = field()
    

@dataclass
class NodesRegistrationsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

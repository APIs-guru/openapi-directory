from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NodesInstitutionsListPathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesInstitutionsListRequest:
    path_params: NodesInstitutionsListPathParams = field()
    

@dataclass
class NodesInstitutionsListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

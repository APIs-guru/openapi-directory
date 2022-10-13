from dataclasses import dataclass, field
from typing import List


@dataclass
class NodesInstitutionsListPathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'node_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class NodesInstitutionsListRequest:
    path_params: NodesInstitutionsListPathParams = field(default=None)
    

@dataclass
class NodesInstitutionsListResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

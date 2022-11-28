from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDContentPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDContentQueryParams:
    dot_: str = field(metadata={'query_param': { 'field_name': '...', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInstancesIDContentRequest:
    path_params: GetInstancesIDContentPathParams = field()
    query_params: GetInstancesIDContentQueryParams = field()
    

@dataclass
class GetInstancesIDContentResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

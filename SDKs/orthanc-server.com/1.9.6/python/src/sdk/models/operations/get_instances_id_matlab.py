from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInstancesIDMatlabPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInstancesIDMatlabRequest:
    path_params: GetInstancesIDMatlabPathParams = field()
    

@dataclass
class GetInstancesIDMatlabResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

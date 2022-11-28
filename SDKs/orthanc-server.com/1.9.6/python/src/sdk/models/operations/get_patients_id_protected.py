from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPatientsIDProtectedPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPatientsIDProtectedRequest:
    path_params: GetPatientsIDProtectedPathParams = field()
    

@dataclass
class GetPatientsIDProtectedResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

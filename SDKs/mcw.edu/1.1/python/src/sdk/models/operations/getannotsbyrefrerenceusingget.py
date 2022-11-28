from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAnnotsByRefrerenceUsingGetPathParams:
    ref_rgd_id: int = field(metadata={'path_param': { 'field_name': 'refRgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnnotsByRefrerenceUsingGetRequest:
    path_params: GetAnnotsByRefrerenceUsingGetPathParams = field()
    

@dataclass
class GetAnnotsByRefrerenceUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

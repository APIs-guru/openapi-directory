from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetQtlByRgdIDUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetQtlByRgdIDUsingGetRequest:
    path_params: GetQtlByRgdIDUsingGetPathParams = field()
    

@dataclass
class GetQtlByRgdIDUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

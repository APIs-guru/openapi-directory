from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAnnotationsByRgdIDUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnnotationsByRgdIDUsingGetRequest:
    path_params: GetAnnotationsByRgdIDUsingGetPathParams = field()
    

@dataclass
class GetAnnotationsByRgdIDUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

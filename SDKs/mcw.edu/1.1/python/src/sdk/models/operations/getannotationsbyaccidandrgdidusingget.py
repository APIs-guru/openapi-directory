from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAnnotationsByAccIDAndRgdIDUsingGetPathParams:
    acc_id: str = field(metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAnnotationsByAccIDAndRgdIDUsingGetRequest:
    path_params: GetAnnotationsByAccIDAndRgdIDUsingGetPathParams = field()
    

@dataclass
class GetAnnotationsByAccIDAndRgdIDUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

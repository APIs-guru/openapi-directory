from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetStrainByRgdIDUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStrainByRgdIDUsingGetRequest:
    path_params: GetStrainByRgdIDUsingGetPathParams = field()
    

@dataclass
class GetStrainByRgdIDUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

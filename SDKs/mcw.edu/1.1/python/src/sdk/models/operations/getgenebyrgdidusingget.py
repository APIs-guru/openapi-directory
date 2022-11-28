from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGeneByRgdIDUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeneByRgdIDUsingGetRequest:
    path_params: GetGeneByRgdIDUsingGetPathParams = field()
    

@dataclass
class GetGeneByRgdIDUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

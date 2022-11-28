from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGeneAllelesUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeneAllelesUsingGetRequest:
    path_params: GetGeneAllelesUsingGetPathParams = field()
    

@dataclass
class GetGeneAllelesUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

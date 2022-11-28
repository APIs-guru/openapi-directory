from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGeneOrthologsUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGeneOrthologsUsingGetRequest:
    path_params: GetGeneOrthologsUsingGetPathParams = field()
    

@dataclass
class GetGeneOrthologsUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

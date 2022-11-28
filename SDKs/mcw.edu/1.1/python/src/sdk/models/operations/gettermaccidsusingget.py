from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTermAccIdsUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTermAccIdsUsingGetRequest:
    path_params: GetTermAccIdsUsingGetPathParams = field()
    

@dataclass
class GetTermAccIdsUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

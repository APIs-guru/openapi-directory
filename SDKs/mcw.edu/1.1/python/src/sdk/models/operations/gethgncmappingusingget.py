from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetHgncMappingUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHgncMappingUsingGetRequest:
    path_params: GetHgncMappingUsingGetPathParams = field()
    

@dataclass
class GetHgncMappingUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

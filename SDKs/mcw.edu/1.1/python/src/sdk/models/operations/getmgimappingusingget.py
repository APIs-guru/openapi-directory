from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetMgiMappingUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMgiMappingUsingGetRequest:
    path_params: GetMgiMappingUsingGetPathParams = field()
    

@dataclass
class GetMgiMappingUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

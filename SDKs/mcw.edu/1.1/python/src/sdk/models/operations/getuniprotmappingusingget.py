from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetUniProtMappingUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUniProtMappingUsingGetRequest:
    path_params: GetUniProtMappingUsingGetPathParams = field()
    

@dataclass
class GetUniProtMappingUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

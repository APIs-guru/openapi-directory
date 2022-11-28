from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGtexMappingUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGtexMappingUsingGetRequest:
    path_params: GetGtexMappingUsingGetPathParams = field()
    

@dataclass
class GetGtexMappingUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

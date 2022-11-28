from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNcbiGeneMappingUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNcbiGeneMappingUsingGetRequest:
    path_params: GetNcbiGeneMappingUsingGetPathParams = field()
    

@dataclass
class GetNcbiGeneMappingUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

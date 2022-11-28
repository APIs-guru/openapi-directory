from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetEnsemblGeneMappingUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEnsemblGeneMappingUsingGetRequest:
    path_params: GetEnsemblGeneMappingUsingGetPathParams = field()
    

@dataclass
class GetEnsemblGeneMappingUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetEnsemblProteinMappingUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEnsemblProteinMappingUsingGetRequest:
    path_params: GetEnsemblProteinMappingUsingGetPathParams = field()
    

@dataclass
class GetEnsemblProteinMappingUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

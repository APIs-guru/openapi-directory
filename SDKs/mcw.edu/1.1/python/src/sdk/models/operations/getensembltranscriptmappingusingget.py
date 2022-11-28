from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetEnsemblTranscriptMappingUsingGetPathParams:
    rgd_id: int = field(metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEnsemblTranscriptMappingUsingGetRequest:
    path_params: GetEnsemblTranscriptMappingUsingGetPathParams = field()
    

@dataclass
class GetEnsemblTranscriptMappingUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    

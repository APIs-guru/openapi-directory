from dataclasses import dataclass, field



@dataclass
class GetEnsemblTranscriptMappingUsingGetPathParams:
    rgd_id: int = field(default=None, metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEnsemblTranscriptMappingUsingGetRequest:
    path_params: GetEnsemblTranscriptMappingUsingGetPathParams = field(default=None)
    

@dataclass
class GetEnsemblTranscriptMappingUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

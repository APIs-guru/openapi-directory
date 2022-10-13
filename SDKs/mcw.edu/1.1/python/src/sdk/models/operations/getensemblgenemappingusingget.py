from dataclasses import dataclass, field



@dataclass
class GetEnsemblGeneMappingUsingGetPathParams:
    rgd_id: int = field(default=None, metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEnsemblGeneMappingUsingGetRequest:
    path_params: GetEnsemblGeneMappingUsingGetPathParams = field(default=None)
    

@dataclass
class GetEnsemblGeneMappingUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

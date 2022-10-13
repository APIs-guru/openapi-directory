from dataclasses import dataclass, field



@dataclass
class GetNcbiGeneMappingUsingGetPathParams:
    rgd_id: int = field(default=None, metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNcbiGeneMappingUsingGetRequest:
    path_params: GetNcbiGeneMappingUsingGetPathParams = field(default=None)
    

@dataclass
class GetNcbiGeneMappingUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

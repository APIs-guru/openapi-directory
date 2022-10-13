from dataclasses import dataclass, field



@dataclass
class GetGtexMappingUsingGetPathParams:
    rgd_id: int = field(default=None, metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGtexMappingUsingGetRequest:
    path_params: GetGtexMappingUsingGetPathParams = field(default=None)
    

@dataclass
class GetGtexMappingUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

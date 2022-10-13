from dataclasses import dataclass, field



@dataclass
class GetHgncMappingUsingGetPathParams:
    rgd_id: int = field(default=None, metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHgncMappingUsingGetRequest:
    path_params: GetHgncMappingUsingGetPathParams = field(default=None)
    

@dataclass
class GetHgncMappingUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

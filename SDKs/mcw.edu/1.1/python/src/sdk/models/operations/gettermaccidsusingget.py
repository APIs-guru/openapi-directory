from dataclasses import dataclass, field



@dataclass
class GetTermAccIdsUsingGetPathParams:
    rgd_id: int = field(default=None, metadata={'path_param': { 'field_name': 'rgdId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTermAccIdsUsingGetRequest:
    path_params: GetTermAccIdsUsingGetPathParams = field(default=None)
    

@dataclass
class GetTermAccIdsUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

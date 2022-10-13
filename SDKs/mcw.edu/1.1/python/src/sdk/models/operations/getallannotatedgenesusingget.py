from dataclasses import dataclass, field



@dataclass
class GetAllAnnotatedGenesUsingGetPathParams:
    acc_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllAnnotatedGenesUsingGetRequest:
    path_params: GetAllAnnotatedGenesUsingGetPathParams = field(default=None)
    

@dataclass
class GetAllAnnotatedGenesUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

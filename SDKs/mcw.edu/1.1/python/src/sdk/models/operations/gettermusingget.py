from dataclasses import dataclass, field



@dataclass
class GetTermUsingGetPathParams:
    acc_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTermUsingGetRequest:
    path_params: GetTermUsingGetPathParams = field(default=None)
    

@dataclass
class GetTermUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

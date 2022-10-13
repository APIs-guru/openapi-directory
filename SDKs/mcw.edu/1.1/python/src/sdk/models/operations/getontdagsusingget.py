from dataclasses import dataclass, field



@dataclass
class GetOntDagsUsingGetPathParams:
    acc_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOntDagsUsingGetRequest:
    path_params: GetOntDagsUsingGetPathParams = field(default=None)
    

@dataclass
class GetOntDagsUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

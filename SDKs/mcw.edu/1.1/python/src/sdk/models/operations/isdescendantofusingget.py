from dataclasses import dataclass, field



@dataclass
class IsDescendantOfUsingGetPathParams:
    acc_id1: str = field(default=None, metadata={'path_param': { 'field_name': 'accId1', 'style': 'simple', 'explode': False }})
    acc_id2: str = field(default=None, metadata={'path_param': { 'field_name': 'accId2', 'style': 'simple', 'explode': False }})
    

@dataclass
class IsDescendantOfUsingGetRequest:
    path_params: IsDescendantOfUsingGetPathParams = field(default=None)
    

@dataclass
class IsDescendantOfUsingGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

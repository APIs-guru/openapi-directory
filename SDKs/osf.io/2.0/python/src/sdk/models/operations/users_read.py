from dataclasses import dataclass, field



@dataclass
class UsersReadPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersReadRequest:
    path_params: UsersReadPathParams = field(default=None)
    

@dataclass
class UsersReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field



@dataclass
class UsersAddonsReadPathParams:
    provider: str = field(default=None, metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersAddonsReadRequest:
    path_params: UsersAddonsReadPathParams = field(default=None)
    

@dataclass
class UsersAddonsReadResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

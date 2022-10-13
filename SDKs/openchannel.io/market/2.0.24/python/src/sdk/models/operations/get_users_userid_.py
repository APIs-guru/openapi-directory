from dataclasses import dataclass, field



@dataclass
class GetUsersUserIDPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUserIDRequest:
    path_params: GetUsersUserIDPathParams = field(default=None)
    

@dataclass
class GetUsersUserIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

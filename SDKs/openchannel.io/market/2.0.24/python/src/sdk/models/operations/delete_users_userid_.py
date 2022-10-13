from dataclasses import dataclass, field



@dataclass
class DeleteUsersUserIDPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUsersUserIDRequest:
    path_params: DeleteUsersUserIDPathParams = field(default=None)
    

@dataclass
class DeleteUsersUserIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

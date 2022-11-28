from dataclasses import dataclass, field



@dataclass
class DeleteUsersUserIDPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUsersUserIDRequest:
    path_params: DeleteUsersUserIDPathParams = field()
    

@dataclass
class DeleteUsersUserIDResponse:
    content_type: str = field()
    status_code: int = field()
    

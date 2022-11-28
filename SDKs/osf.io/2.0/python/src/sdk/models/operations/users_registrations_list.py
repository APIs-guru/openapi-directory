from dataclasses import dataclass, field



@dataclass
class UsersRegistrationsListPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersRegistrationsListRequest:
    path_params: UsersRegistrationsListPathParams = field()
    

@dataclass
class UsersRegistrationsListResponse:
    content_type: str = field()
    status_code: int = field()
    

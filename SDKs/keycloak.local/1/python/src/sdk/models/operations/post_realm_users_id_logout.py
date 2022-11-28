from dataclasses import dataclass, field



@dataclass
class PostRealmUsersIDLogoutPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUsersIDLogoutRequest:
    path_params: PostRealmUsersIDLogoutPathParams = field()
    

@dataclass
class PostRealmUsersIDLogoutResponse:
    content_type: str = field()
    status_code: int = field()
    

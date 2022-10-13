from dataclasses import dataclass, field



@dataclass
class PostRealmUsersIDLogoutPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUsersIDLogoutRequest:
    path_params: PostRealmUsersIDLogoutPathParams = field(default=None)
    

@dataclass
class PostRealmUsersIDLogoutResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

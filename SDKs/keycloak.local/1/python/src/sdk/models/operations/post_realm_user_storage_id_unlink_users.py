from dataclasses import dataclass, field



@dataclass
class PostRealmUserStorageIDUnlinkUsersPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUserStorageIDUnlinkUsersRequest:
    path_params: PostRealmUserStorageIDUnlinkUsersPathParams = field(default=None)
    

@dataclass
class PostRealmUserStorageIDUnlinkUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

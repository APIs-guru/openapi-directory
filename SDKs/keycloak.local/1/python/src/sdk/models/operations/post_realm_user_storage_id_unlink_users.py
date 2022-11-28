from dataclasses import dataclass, field



@dataclass
class PostRealmUserStorageIDUnlinkUsersPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUserStorageIDUnlinkUsersRequest:
    path_params: PostRealmUserStorageIDUnlinkUsersPathParams = field()
    

@dataclass
class PostRealmUserStorageIDUnlinkUsersResponse:
    content_type: str = field()
    status_code: int = field()
    

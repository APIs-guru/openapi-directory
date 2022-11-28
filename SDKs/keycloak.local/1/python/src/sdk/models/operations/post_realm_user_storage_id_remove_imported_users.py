from dataclasses import dataclass, field



@dataclass
class PostRealmUserStorageIDRemoveImportedUsersPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUserStorageIDRemoveImportedUsersRequest:
    path_params: PostRealmUserStorageIDRemoveImportedUsersPathParams = field()
    

@dataclass
class PostRealmUserStorageIDRemoveImportedUsersResponse:
    content_type: str = field()
    status_code: int = field()
    

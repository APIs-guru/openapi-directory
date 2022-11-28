from dataclasses import dataclass, field



@dataclass
class PostRealmUsersIDCredentialsCredentialIDMoveToFirstPathParams:
    credential_id: str = field(metadata={'path_param': { 'field_name': 'credentialId', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUsersIDCredentialsCredentialIDMoveToFirstRequest:
    path_params: PostRealmUsersIDCredentialsCredentialIDMoveToFirstPathParams = field()
    

@dataclass
class PostRealmUsersIDCredentialsCredentialIDMoveToFirstResponse:
    content_type: str = field()
    status_code: int = field()
    

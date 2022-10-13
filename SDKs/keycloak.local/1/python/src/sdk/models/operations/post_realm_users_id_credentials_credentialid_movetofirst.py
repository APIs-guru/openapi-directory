from dataclasses import dataclass, field



@dataclass
class PostRealmUsersIDCredentialsCredentialIDMoveToFirstPathParams:
    credential_id: str = field(default=None, metadata={'path_param': { 'field_name': 'credentialId', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUsersIDCredentialsCredentialIDMoveToFirstRequest:
    path_params: PostRealmUsersIDCredentialsCredentialIDMoveToFirstPathParams = field(default=None)
    

@dataclass
class PostRealmUsersIDCredentialsCredentialIDMoveToFirstResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

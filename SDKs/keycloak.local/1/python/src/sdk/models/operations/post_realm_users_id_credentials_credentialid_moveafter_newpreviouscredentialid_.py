from dataclasses import dataclass, field



@dataclass
class PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialIDPathParams:
    credential_id: str = field(metadata={'path_param': { 'field_name': 'credentialId', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    new_previous_credential_id: str = field(metadata={'path_param': { 'field_name': 'newPreviousCredentialId', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialIDRequest:
    path_params: PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialIDPathParams = field()
    

@dataclass
class PostRealmUsersIDCredentialsCredentialIDMoveAfterNewPreviousCredentialIDResponse:
    content_type: str = field()
    status_code: int = field()
    

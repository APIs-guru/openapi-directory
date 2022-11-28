from dataclasses import dataclass, field



@dataclass
class DeleteRealmUsersIDCredentialsCredentialIDPathParams:
    credential_id: str = field(metadata={'path_param': { 'field_name': 'credentialId', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRealmUsersIDCredentialsCredentialIDRequest:
    path_params: DeleteRealmUsersIDCredentialsCredentialIDPathParams = field()
    

@dataclass
class DeleteRealmUsersIDCredentialsCredentialIDResponse:
    content_type: str = field()
    status_code: int = field()
    

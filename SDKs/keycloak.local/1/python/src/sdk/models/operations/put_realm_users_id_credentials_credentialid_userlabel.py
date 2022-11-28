from dataclasses import dataclass, field



@dataclass
class PutRealmUsersIDCredentialsCredentialIDUserLabelPathParams:
    credential_id: str = field(metadata={'path_param': { 'field_name': 'credentialId', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmUsersIDCredentialsCredentialIDUserLabelRequest:
    path_params: PutRealmUsersIDCredentialsCredentialIDUserLabelPathParams = field()
    request: str = field(metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PutRealmUsersIDCredentialsCredentialIDUserLabelResponse:
    content_type: str = field()
    status_code: int = field()
    

from dataclasses import dataclass, field



@dataclass
class PutRealmUsersIDCredentialsCredentialIDUserLabelPathParams:
    credential_id: str = field(default=None, metadata={'path_param': { 'field_name': 'credentialId', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmUsersIDCredentialsCredentialIDUserLabelRequest:
    path_params: PutRealmUsersIDCredentialsCredentialIDUserLabelPathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PutRealmUsersIDCredentialsCredentialIDUserLabelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

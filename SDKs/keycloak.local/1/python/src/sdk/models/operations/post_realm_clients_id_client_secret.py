from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRealmClientsIDClientSecretPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsIDClientSecretRequest:
    path_params: PostRealmClientsIDClientSecretPathParams = field(default=None)
    

@dataclass
class PostRealmClientsIDClientSecretResponse:
    content_type: str = field(default=None)
    credential_representation: Optional[shared.CredentialRepresentation] = field(default=None)
    status_code: int = field(default=None)
    

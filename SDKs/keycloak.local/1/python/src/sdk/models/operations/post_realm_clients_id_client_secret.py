from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRealmClientsIDClientSecretPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsIDClientSecretRequest:
    path_params: PostRealmClientsIDClientSecretPathParams = field()
    

@dataclass
class PostRealmClientsIDClientSecretResponse:
    content_type: str = field()
    status_code: int = field()
    credential_representation: Optional[shared.CredentialRepresentation] = field(default=None)
    

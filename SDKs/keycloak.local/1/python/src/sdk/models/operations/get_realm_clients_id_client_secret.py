from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDClientSecretPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDClientSecretRequest:
    path_params: GetRealmClientsIDClientSecretPathParams = field(default=None)
    

@dataclass
class GetRealmClientsIDClientSecretResponse:
    content_type: str = field(default=None)
    credential_representation: Optional[shared.CredentialRepresentation] = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRealmClientsIDRegistrationAccessTokenPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsIDRegistrationAccessTokenRequest:
    path_params: PostRealmClientsIDRegistrationAccessTokenPathParams = field()
    

@dataclass
class PostRealmClientsIDRegistrationAccessTokenResponse:
    content_type: str = field()
    status_code: int = field()
    client_representation: Optional[shared.ClientRepresentation] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDServiceAccountUserPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDServiceAccountUserRequest:
    path_params: GetRealmClientsIDServiceAccountUserPathParams = field(default=None)
    

@dataclass
class GetRealmClientsIDServiceAccountUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_representation: Optional[shared.UserRepresentation] = field(default=None)
    

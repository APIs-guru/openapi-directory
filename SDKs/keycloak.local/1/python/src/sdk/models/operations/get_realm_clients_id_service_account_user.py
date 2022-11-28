from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDServiceAccountUserPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDServiceAccountUserRequest:
    path_params: GetRealmClientsIDServiceAccountUserPathParams = field()
    

@dataclass
class GetRealmClientsIDServiceAccountUserResponse:
    content_type: str = field()
    status_code: int = field()
    user_representation: Optional[shared.UserRepresentation] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmUsersIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUsersIDRequest:
    path_params: GetRealmUsersIDPathParams = field()
    

@dataclass
class GetRealmUsersIDResponse:
    content_type: str = field()
    status_code: int = field()
    user_representation: Optional[shared.UserRepresentation] = field(default=None)
    

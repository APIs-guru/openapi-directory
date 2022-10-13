from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmUsersIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmUsersIDRequest:
    path_params: GetRealmUsersIDPathParams = field(default=None)
    

@dataclass
class GetRealmUsersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_representation: Optional[shared.UserRepresentation] = field(default=None)
    

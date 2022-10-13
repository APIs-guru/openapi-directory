from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmUsersIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmUsersIDRequest:
    path_params: PutRealmUsersIDPathParams = field(default=None)
    request: shared.UserRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmUsersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

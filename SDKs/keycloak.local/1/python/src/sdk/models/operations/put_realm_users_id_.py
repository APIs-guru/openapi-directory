from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmUsersIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmUsersIDRequest:
    path_params: PutRealmUsersIDPathParams = field()
    request: shared.UserRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmUsersIDResponse:
    content_type: str = field()
    status_code: int = field()
    

from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmClientsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmClientsIDRequest:
    path_params: PutRealmClientsIDPathParams = field()
    request: shared.ClientRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmClientsIDResponse:
    content_type: str = field()
    status_code: int = field()
    

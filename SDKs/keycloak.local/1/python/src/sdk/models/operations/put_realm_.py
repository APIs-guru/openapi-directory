from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmRequest:
    path_params: PutRealmPathParams = field()
    request: shared.RealmRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmResponse:
    content_type: str = field()
    status_code: int = field()
    

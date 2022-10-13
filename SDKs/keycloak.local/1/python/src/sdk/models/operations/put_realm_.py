from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmRequest:
    path_params: PutRealmPathParams = field(default=None)
    request: shared.RealmRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

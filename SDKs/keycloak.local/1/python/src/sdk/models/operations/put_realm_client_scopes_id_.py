from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmClientScopesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmClientScopesIDRequest:
    path_params: PutRealmClientScopesIDPathParams = field()
    request: shared.ClientScopeRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmClientScopesIDResponse:
    content_type: str = field()
    status_code: int = field()
    

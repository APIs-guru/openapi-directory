from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmClientsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsRequest:
    path_params: PostRealmClientsPathParams = field()
    request: shared.ClientRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientsResponse:
    content_type: str = field()
    status_code: int = field()
    

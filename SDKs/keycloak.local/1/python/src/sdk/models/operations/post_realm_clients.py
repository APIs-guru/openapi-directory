from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostRealmClientsPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsRequest:
    path_params: PostRealmClientsPathParams = field(default=None)
    request: shared.ClientRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

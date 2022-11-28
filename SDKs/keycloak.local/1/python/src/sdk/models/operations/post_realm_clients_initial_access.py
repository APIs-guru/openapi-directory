from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRealmClientsInitialAccessPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsInitialAccessRequest:
    path_params: PostRealmClientsInitialAccessPathParams = field()
    request: shared.ClientInitialAccessCreatePresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientsInitialAccessResponse:
    content_type: str = field()
    status_code: int = field()
    client_initial_access_presentation: Optional[shared.ClientInitialAccessPresentation] = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRealmClientsInitialAccessPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmClientsInitialAccessRequest:
    path_params: PostRealmClientsInitialAccessPathParams = field(default=None)
    request: shared.ClientInitialAccessCreatePresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmClientsInitialAccessResponse:
    client_initial_access_presentation: Optional[shared.ClientInitialAccessPresentation] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

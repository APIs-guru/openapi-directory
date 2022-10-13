from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientsInitialAccessPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsInitialAccessRequest:
    path_params: GetRealmClientsInitialAccessPathParams = field(default=None)
    

@dataclass
class GetRealmClientsInitialAccessResponse:
    client_initial_access_presentations: Optional[List[shared.ClientInitialAccessPresentation]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

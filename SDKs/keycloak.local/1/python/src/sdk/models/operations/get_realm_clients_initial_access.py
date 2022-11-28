from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientsInitialAccessPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsInitialAccessRequest:
    path_params: GetRealmClientsInitialAccessPathParams = field()
    

@dataclass
class GetRealmClientsInitialAccessResponse:
    content_type: str = field()
    status_code: int = field()
    client_initial_access_presentations: Optional[List[shared.ClientInitialAccessPresentation]] = field(default=None)
    

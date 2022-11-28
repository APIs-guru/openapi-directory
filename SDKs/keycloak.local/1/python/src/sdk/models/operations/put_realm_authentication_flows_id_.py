from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmAuthenticationFlowsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmAuthenticationFlowsIDRequest:
    path_params: PutRealmAuthenticationFlowsIDPathParams = field()
    request: shared.AuthenticationFlowRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmAuthenticationFlowsIDResponse:
    content_type: str = field()
    status_code: int = field()
    

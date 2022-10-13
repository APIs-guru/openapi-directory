from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmAuthenticationFlowsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmAuthenticationFlowsIDRequest:
    path_params: PutRealmAuthenticationFlowsIDPathParams = field(default=None)
    request: shared.AuthenticationFlowRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmAuthenticationFlowsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmAuthenticationFlowsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationFlowsIDRequest:
    path_params: GetRealmAuthenticationFlowsIDPathParams = field()
    

@dataclass
class GetRealmAuthenticationFlowsIDResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_flow_representation: Optional[shared.AuthenticationFlowRepresentation] = field(default=None)
    

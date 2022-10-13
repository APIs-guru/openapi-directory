from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmAuthenticationFlowsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationFlowsIDRequest:
    path_params: GetRealmAuthenticationFlowsIDPathParams = field(default=None)
    

@dataclass
class GetRealmAuthenticationFlowsIDResponse:
    authentication_flow_representation: Optional[shared.AuthenticationFlowRepresentation] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

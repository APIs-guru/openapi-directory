from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmAuthenticationFlowsPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationFlowsRequest:
    path_params: GetRealmAuthenticationFlowsPathParams = field(default=None)
    

@dataclass
class GetRealmAuthenticationFlowsResponse:
    authentication_flow_representations: Optional[List[shared.AuthenticationFlowRepresentation]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

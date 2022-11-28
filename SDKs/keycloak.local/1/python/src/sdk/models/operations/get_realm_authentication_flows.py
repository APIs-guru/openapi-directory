from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmAuthenticationFlowsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationFlowsRequest:
    path_params: GetRealmAuthenticationFlowsPathParams = field()
    

@dataclass
class GetRealmAuthenticationFlowsResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_flow_representations: Optional[List[shared.AuthenticationFlowRepresentation]] = field(default=None)
    

from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmAuthenticationFlowsFlowAliasExecutionsPathParams:
    flow_alias: str = field(metadata={'path_param': { 'field_name': 'flowAlias', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmAuthenticationFlowsFlowAliasExecutionsRequest:
    path_params: PutRealmAuthenticationFlowsFlowAliasExecutionsPathParams = field()
    request: shared.AuthenticationExecutionInfoRepresentation = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmAuthenticationFlowsFlowAliasExecutionsResponse:
    content_type: str = field()
    status_code: int = field()
    

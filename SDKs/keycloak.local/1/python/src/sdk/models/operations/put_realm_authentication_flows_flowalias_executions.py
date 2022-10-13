from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutRealmAuthenticationFlowsFlowAliasExecutionsPathParams:
    flow_alias: str = field(default=None, metadata={'path_param': { 'field_name': 'flowAlias', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRealmAuthenticationFlowsFlowAliasExecutionsRequest:
    path_params: PutRealmAuthenticationFlowsFlowAliasExecutionsPathParams = field(default=None)
    request: shared.AuthenticationExecutionInfoRepresentation = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutRealmAuthenticationFlowsFlowAliasExecutionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

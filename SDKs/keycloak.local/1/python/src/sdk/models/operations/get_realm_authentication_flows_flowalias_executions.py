from dataclasses import dataclass, field



@dataclass
class GetRealmAuthenticationFlowsFlowAliasExecutionsPathParams:
    flow_alias: str = field(default=None, metadata={'path_param': { 'field_name': 'flowAlias', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmAuthenticationFlowsFlowAliasExecutionsRequest:
    path_params: GetRealmAuthenticationFlowsFlowAliasExecutionsPathParams = field(default=None)
    

@dataclass
class GetRealmAuthenticationFlowsFlowAliasExecutionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    

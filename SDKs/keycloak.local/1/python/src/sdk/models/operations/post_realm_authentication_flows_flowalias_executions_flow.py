from dataclasses import dataclass, field
from typing import Any


@dataclass
class PostRealmAuthenticationFlowsFlowAliasExecutionsFlowPathParams:
    flow_alias: str = field(metadata={'path_param': { 'field_name': 'flowAlias', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmAuthenticationFlowsFlowAliasExecutionsFlowRequest:
    path_params: PostRealmAuthenticationFlowsFlowAliasExecutionsFlowPathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRealmAuthenticationFlowsFlowAliasExecutionsFlowResponse:
    content_type: str = field()
    status_code: int = field()
    
